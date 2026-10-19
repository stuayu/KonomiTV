# syntax=docker/dockerfile:1

# --------------------------------------------------------------------------------------------------------------
# サードパーティーライブラリのダウンロードを行うステージ
# Docker のマルチステージビルドを使い、最終的な Docker イメージのサイズを抑え、ビルドキャッシュを効かせる
# --------------------------------------------------------------------------------------------------------------

# 念のため最終イメージに合わせて Ubuntu 24.04 LTS にしておく
## 中間イメージなので、サイズは（ビルドするマシンのディスク容量以外は）気にしなくて良い
FROM ubuntu:24.04 AS thirdparty-downloader

# apt-get に対話的に設定確認されないための設定
ENV DEBIAN_FRONTEND=noninteractive

# ダウンロード・展開に必要なパッケージのインストール
RUN apt-get update && apt-get install -y --no-install-recommends aria2 ca-certificates unzip xz-utils

# サードパーティーライブラリをダウンロード
## サードパーティーライブラリは変更が少ないので、先にダウンロード処理を実行してビルドキャッシュを効かせる
WORKDIR /
## リリース版用
# RUN aria2c -x10 https://github.com/tsukumijima/KonomiTV/releases/download/v0.14.1/thirdparty-linux.tar.xz
# RUN tar xvf thirdparty-linux.tar.xz
## 開発版 (0.xx.x-dev) 用
RUN aria2c -x10 https://nightly.link/tsukumijima/KonomiTV/actions/runs/38878639663/thirdparty-linux.tar.xz.zip
RUN unzip thirdparty-linux.tar.xz.zip && tar xvf thirdparty-linux.tar.xz

# --------------------------------------------------------------------------------------------------------------
# クライアントをビルドするステージ
# クライアントのビルド成果物 (dist) は Git に含まれているが、万が一ビルドし忘れたりや開発ブランチでの利便性を考慮してビルドしておく
# --------------------------------------------------------------------------------------------------------------

FROM ubuntu:24.04 AS client-builder

# Official Node.js 24 archives and pinned checksums; keep this context self contained.
RUN <<'NODE_INSTALL'
#!/bin/sh
# Official Node.js 24 binaries; SHA256 from nodejs.org/dist/v24.22.0/SHASUMS256.txt.
set -eu
version=24.22.0
case "$(dpkg --print-architecture)" in
  amd64) arch=x64; sha=cc2f601cee82d9a5a233302fe307abc600727035fd7d2c3a3571755989e95008 ;;
  arm64) arch=arm64; sha=fef00bb4d36e1c50104a9775a10359beee98f162b4104dd12472c75065c6a143 ;;
  *) echo 'Unsupported Node.js architecture' >&2; exit 1 ;;
esac
apt-get update
apt-get install -y --no-install-recommends ca-certificates curl xz-utils libatomic1 libstdc++6
curl -fsSL --retry 3 "https://nodejs.org/dist/v${version}/node-v${version}-linux-${arch}.tar.xz" -o /tmp/node.tar.xz
printf '%s  %s\n' "$sha" /tmp/node.tar.xz | sha256sum -c -
tar -xJf /tmp/node.tar.xz -C /usr/local --strip-components=1
rm /tmp/node.tar.xz
node --version
npm --version
rm -rf /var/lib/apt/lists/*
npm install --global yarn@1.22.22
NODE_INSTALL

# 依存パッケージリスト (package.json/yarn.lock) だけをコピー
WORKDIR /code/client/
COPY ./client/package.json ./client/yarn.lock /code/client/

# 依存パッケージを yarn でインストール
RUN yarn install --frozen-lockfile

# クライアントのソースコードをコピー
COPY ./client/ /code/client/

# クライアントをビルド
# /code/client/dist/ に成果物が作成される
RUN yarn build

# --------------------------------------------------------------------------------------------------------------
# メインのステージ
# ここで作成された実行時イメージが docker compose up -d で起動される
# --------------------------------------------------------------------------------------------------------------

# Ubuntu 24.04 LTS (with CUDA) をベースイメージとして利用
## NVEncC の動作には CUDA ライブラリが必要なため、CUDA 付きのイメージを使う
## RTX 5090 (Blackwell) 世代をサポートする最低バージョンである CUDA 12.8.0 を指定している
## cuda:x.x.x-runtime 系イメージだと NVEncC で使わない余計なライブラリが付属して重いので、base イメージを使う
## OS イメージは、VCEEncC 公式に動作確認されている Linux 環境が Ubuntu 24.04 以降のみであること、
## また VA-API 向け OpenCL ドライバー Rusticl が Ubuntu 24.04 以降の mesa-opencl-icd にしか含まれないことを鑑み、Ubuntu 24.04 を指定している
FROM nvidia/cuda:12.8.0-base-ubuntu24.04

# タイムゾーンを東京に設定
ENV TZ=Asia/Tokyo

# apt-get に対話的に設定を確認されないための設定
ENV DEBIAN_FRONTEND=noninteractive

# サードパーティーライブラリの依存パッケージをインストール
## libfontconfig1, libfreetype6, libfribidi0: フォント関連のライブラリ (なぜ必要だったか忘れたが多分ないと動かない)
## QSVEncC: Intel Media VA Driver (non-free 版), Intel 版 OpenCL が必要
## NVEncC: runtime 版には含まれているが base 版には含まれていない cuda-nvrtc-12-8, libnpp-12-8 をインストールする
## VCEEncC: AMF と VA-API の両方のユーザーモードドライバーを入れておき、VCEEncC の --backend auto (既定) に GPU ごとに選ばせる
##  - AMF (RDNA 世代以降): AMD 配布の AMF ランタイム (amf-amdgpu-pro, libamdenc-amdgpu-pro) と、AMF が内部で使う Mesa の Vulkan ドライバー (RADV)
##    AMF ランタイムは、VCEEncC 公式に Ubuntu 24.04 + RADV 環境での初期化失敗の回避策として動作確認されている 6.4.4 (25.10) 系に固定する
##    AMF 利用時の OpenCL は提供元が AMD の実装しか選ばれないため、OpenCL には ROCm を使う (ROCm の動作にはホストの /dev/kfd が必要)
##  - VA-API (Vega などの AMF 非対応の GCN 世代も含む): Mesa の VA-API ドライバー (radeonsi) と、Mesa の OpenCL 実装 (Rusticl)
##    VA-API 利用時の OpenCL は ROCm を優先し、ROCm で GPU が見つからなければ Rusticl が使われる
##  カーネルドライバーはホスト側の Linux に標準で入っている amdgpu を使うため、ホストへの AMDGPU-PRO Driver のインストールは不要
## Zendriver: Twitter GraphQL API を叩くために必要な Google Chrome とサイズ小さめの日本語フォントをインストールする
## ref: https://github.com/rigaya/QSVEnc/blob/master/Install.ja.md
## ref: https://github.com/rigaya/VCEEnc/blob/master/Install.ja.md
RUN apt-get update && \
    # リポジトリ追加に必要な最低限のパッケージをインストール
    apt-get install -y --no-install-recommends ca-certificates curl git gpg tzdata && \
    # Intel GPU リポジトリ
    curl -fsSL https://repositories.intel.com/gpu/intel-graphics.key | gpg --yes --dearmor --output /usr/share/keyrings/intel-graphics-keyring.gpg && \
    echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/intel-graphics-keyring.gpg] https://repositories.intel.com/gpu/ubuntu noble unified' > /etc/apt/sources.list.d/intel-gpu-noble.list && \
    # AMD / ROCm リポジトリ
    curl -fsSL https://repo.radeon.com/rocm/rocm.gpg.key | gpg --yes --dearmor --output /usr/share/keyrings/rocm-keyring.gpg && \
    echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/rocm-keyring.gpg] https://repo.radeon.com/amdgpu/6.4.4/ubuntu noble main' > /etc/apt/sources.list.d/amdgpu.list && \
    echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/rocm-keyring.gpg] https://repo.radeon.com/amdgpu/6.4.4/ubuntu noble proprietary' > /etc/apt/sources.list.d/amdgpu-proprietary.list && \
    echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/rocm-keyring.gpg] https://repo.radeon.com/rocm/apt/6.4.4 noble main' > /etc/apt/sources.list.d/rocm.list && \
    # Google Chrome リポジトリ
    curl -fsSL https://dl.google.com/linux/linux_signing_key.pub | gpg --yes --dearmor --output /usr/share/keyrings/google-chrome-keyring.gpg && \
    echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome-keyring.gpg] https://dl.google.com/linux/chrome/deb/ stable main' > /etc/apt/sources.list.d/google-chrome.list && \
    # リポジトリを更新し、この時点で利用可能なパッケージをアップグレード
    apt-get update && apt-get upgrade -y && \
    # 必要なパッケージをインストール
    apt-get install -y --no-install-recommends \
        # フォント関連のライブラリ
        libfontconfig1 libfreetype6 libfribidi0 \
        # Intel GPU 関連のライブラリ
        intel-media-va-driver-non-free intel-opencl-icd libigfxcmrt7 libmfx1 libmfxgen1 libva-drm2 libva-x11-2 \
        # NVIDIA GPU 関連のライブラリ
        cuda-nvrtc-12-8 libnpp-12-8 \
        # AMD GPU 関連のライブラリ (AMF)
        amf-amdgpu-pro libamdenc-amdgpu-pro libdrm2-amdgpu mesa-vulkan-drivers ocl-icd-libopencl1 rocm-opencl-runtime \
        # AMD GPU 関連のライブラリ (VA-API)
        mesa-va-drivers mesa-opencl-icd \
        # Zendriver 用に Google Chrome と日本語フォントをインストール
        google-chrome-stable fonts-vlgothic && \
    # 実行時イメージなので RUN の最後に掃除する
    apt-get -y autoremove && \
    apt-get -y clean && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /tmp/*

# Gen9〜11 (Skylake〜Ice Lake) の Intel GPU 向けに legacy OpenCL ランタイムを追加する
## 現行の intel-opencl-icd (IGC 2.x) は Gen12 以降のみ対応のため、Gen9〜11 では QSVEncC の OpenCL フィルターが使えない
## Intel が Gen9〜11 向けに配布している legacy1 ランタイム (IGC 1.x) を別 ICD として併存させる
## ref: https://github.com/intel/compute-runtime/blob/master/LEGACY_PLATFORMS.md
RUN curl -fL --retry 3 -o /tmp/intel-igc-core.deb https://github.com/intel/intel-graphics-compiler/releases/download/igc-1.0.17537.24/intel-igc-core_1.0.17537.24_amd64.deb && \
    curl -fL --retry 3 -o /tmp/intel-igc-opencl.deb https://github.com/intel/intel-graphics-compiler/releases/download/igc-1.0.17537.24/intel-igc-opencl_1.0.17537.24_amd64.deb && \
    curl -fL --retry 3 -o /tmp/intel-opencl-icd-legacy1.deb https://github.com/intel/compute-runtime/releases/download/24.35.30872.36/intel-opencl-icd-legacy1_24.35.30872.36_amd64.deb && \
    printf '%s  %s\n' \
        c1e1ecdfe2064c047c552651cfdcdafc504f2033afafba65654338b880048b67 /tmp/intel-igc-core.deb \
        dd016400f87fa2b6a9fa9fbcca7eb4a2629174a29de679709f9bec5cede88b0e /tmp/intel-igc-opencl.deb \
        bbe71e4f414259e06a10cde72c29a2bd78d41b2bb2f6f8463b1806797fe66e85 /tmp/intel-opencl-icd-legacy1.deb | sha256sum -c - && \
    apt-get update && \
    apt-get install -y --no-install-recommends /tmp/intel-igc-core.deb /tmp/intel-igc-opencl.deb /tmp/intel-opencl-icd-legacy1.deb && \
    test -s /etc/OpenCL/vendors/intel_legacy1.icd && \
    # legacy1 の IGC は /usr/local/lib に入るが、deb がライブラリキャッシュを更新しないため明示的に更新する
    ldconfig && \
    apt-get -y autoremove && \
    apt-get -y clean && \
    rm -rf /var/lib/apt/lists/* /tmp/*.deb

# ダウンロードしておいたサードパーティーライブラリをコピー
WORKDIR /code/server/
COPY --from=thirdparty-downloader /thirdparty/ /code/server/thirdparty/

# uv の依存パッケージリストだけをコピー
COPY ./server/pyproject.toml ./server/uv.lock /code/server/

# 依存パッケージを uv でインストール
## インストーラーと同様に、サードパーティーライブラリ内の Python と uv を使って仮想環境 (.venv) をプロジェクト直下に作成する
## インストール後に uv のキャッシュを削除し、イメージ容量を削減する
RUN /code/server/thirdparty/Python/bin/python -m uv sync --frozen --no-dev --python /code/server/thirdparty/Python/bin/python && \
    /code/server/thirdparty/Python/bin/python -m uv cache clean

# サーバーのソースコードをコピー
COPY ./server/ /code/server/

# クライアントのビルド成果物 (dist) だけをコピー
COPY --from=client-builder /code/client/dist/ /code/client/dist/

# config.example.yaml をコピー
COPY ./config.example.yaml /code/config.example.yaml

# KonomiTV サーバーを起動
ENTRYPOINT ["/code/server/.venv/bin/python", "KonomiTV.py"]
