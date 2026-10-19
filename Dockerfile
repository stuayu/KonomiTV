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
RUN aria2c -x10 https://github.com/tsukumijima/KonomiTV/releases/download/v0.14.1/thirdparty-linux.tar.xz
RUN tar xvf thirdparty-linux.tar.xz
## 開発版 (0.xx.x-dev) 用
# RUN aria2c -x10 https://nightly.link/tsukumijima/KonomiTV/actions/runs/27093421017/thirdparty-linux.tar.xz.zip
# RUN unzip thirdparty-linux.tar.xz.zip && tar xvf thirdparty-linux.tar.xz

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
FROM nvidia/cuda:12.8.0-base-ubuntu24.04

ENV TZ=Asia/Tokyo DEBIAN_FRONTEND=noninteractive
ENV NVIDIA_VISIBLE_DEVICES=all NVIDIA_DRIVER_CAPABILITIES=compute,utility,video
# LIBVA_DRIVERS_PATH は設定しない。同梱の rigaya 系エンコーダは同梱 libva と
# thirdparty/Library/dri の iHD を使うため、システムの新しい iHD を読ませると初期化に失敗する。
# Mesa VA-API/OpenCL always installed; AMF/ROCm 6.4.4 can be disabled at build time.
ARG ENABLE_AMD_AMF=1
# Same noble userspace policy as docker/common/install-gpu-runtime.sh in the stack.
# Embedded because this upstream Docker build has its own context.
RUN <<'GPU_INSTALL'
#!/bin/sh
# Ubuntu noble userspace only: the host owns GPU kernel modules and firmware.
# The caller can omit AMD's proprietary AMF/ROCm stack with ENABLE_AMD_AMF=0.
set -eu
# shellcheck disable=SC1091
. /etc/os-release
test "$ID:$VERSION_CODENAME" = ubuntu:noble
case "${ENABLE_AMD_AMF:-1}" in 0|1) ;; *) echo 'ENABLE_AMD_AMF must be 0 or 1' >&2; exit 1 ;; esac
# i965 shaders and non-free iHD are in multiverse; libmfx1 is in universe.
sed -i 's/^Components:.*/Components: main restricted universe multiverse/' /etc/apt/sources.list.d/ubuntu.sources
apt-get update
apt-get install -y --no-install-recommends ca-certificates curl gpg \
    libva2 libva-drm2 libva-x11-2 vainfo clinfo ocl-icd-libopencl1 \
    mesa-va-drivers mesa-vulkan-drivers mesa-opencl-icd libvulkan1
# A stable arch-neutral path also works for older static FFmpeg/libva builds.
# Do not force LIBVA_DRIVER_NAME: iHD, i965 and radeonsi must remain selectable.
case "$(dpkg --print-architecture)" in
    amd64) driver_dir=/usr/lib/x86_64-linux-gnu/dri ;;
    arm64) driver_dir=/usr/lib/aarch64-linux-gnu/dri ;;
    *) echo 'Unsupported GPU userspace architecture' >&2; exit 1 ;;
esac
mkdir -p /usr/local/lib
ln -sfn "$driver_dir" /usr/local/lib/dri
# Intel's graphics PPA publishes modern iHD/OpenCL/oneVPL packages for noble.
# Only amd64 has these Intel/AMD proprietary packages. Mesa also works on arm64.
if [ "$(dpkg --print-architecture)" = amd64 ]; then
    key=0C0E6AF955CE463C03FC51574D098D70AFBE5E1F
    curl -fsSL --retry 3 "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x${key}" -o /tmp/intel-graphics.key
    gpg --show-keys --with-colons /tmp/intel-graphics.key | grep -F "fpr:::::::::${key}:"
    gpg --batch --yes --dearmor -o /usr/share/keyrings/intel-graphics-ppa.gpg /tmp/intel-graphics.key
    echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/intel-graphics-ppa.gpg] https://ppa.launchpadcontent.net/kobuk-team/intel-graphics/ubuntu noble main' > /etc/apt/sources.list.d/intel-graphics-ppa.list
    apt-get update
    apt-get install -y --no-install-recommends \
        intel-media-va-driver-non-free i965-va-driver-shaders intel-opencl-icd libigfxcmrt7 \
        libmfx1 libmfx-gen1.2 libvpl2
    # Media SDK's libmfxhw64 is the Gen9 runtime; oneVPL's libmfx-gen is Gen12+.
    # Modern OpenCL (IGC 2) and legacy1 OpenCL (IGC 1) have separate libraries/ICDs.
    curl -fL --retry 3 https://github.com/intel/intel-graphics-compiler/releases/download/igc-1.0.17537.24/intel-igc-core_1.0.17537.24_amd64.deb -o /tmp/intel-igc-core.deb
    curl -fL --retry 3 https://github.com/intel/intel-graphics-compiler/releases/download/igc-1.0.17537.24/intel-igc-opencl_1.0.17537.24_amd64.deb -o /tmp/intel-igc-opencl.deb
    curl -fL --retry 3 https://github.com/intel/compute-runtime/releases/download/24.35.30872.36/intel-opencl-icd-legacy1_24.35.30872.36_amd64.deb -o /tmp/intel-opencl-icd-legacy1.deb
    printf '%s  %s\n' \
        c1e1ecdfe2064c047c552651cfdcdafc504f2033afafba65654338b880048b67 /tmp/intel-igc-core.deb \
        dd016400f87fa2b6a9fa9fbcca7eb4a2629174a29de679709f9bec5cede88b0e /tmp/intel-igc-opencl.deb \
        bbe71e4f414259e06a10cde72c29a2bd78d41b2bb2f6f8463b1806797fe66e85 /tmp/intel-opencl-icd-legacy1.deb | sha256sum -c -
    apt-get install -y --no-install-recommends /tmp/intel-igc-core.deb /tmp/intel-igc-opencl.deb /tmp/intel-opencl-icd-legacy1.deb
    test -s /etc/OpenCL/vendors/intel.icd
    test -s /etc/OpenCL/vendors/intel_legacy1.icd
    if [ "${ENABLE_AMD_AMF:-1}" = 1 ]; then
        curl -fsSL --retry 3 https://repo.radeon.com/rocm/rocm.gpg.key | gpg --batch --yes --dearmor -o /usr/share/keyrings/rocm-keyring.gpg
        # All AMD repositories use the same 6.4.4 release; no amdgpu-install/DKMS.
        echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/rocm-keyring.gpg] https://repo.radeon.com/amdgpu/6.4.4/ubuntu noble main proprietary' > /etc/apt/sources.list.d/amdgpu.list
        echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/rocm-keyring.gpg] https://repo.radeon.com/rocm/apt/6.4.4 noble main' > /etc/apt/sources.list.d/rocm.list
        apt-get update
        apt-get install -y --no-install-recommends \
            amf-amdgpu-pro=1.4.37-2203192.24.04 \
            libamdenc-amdgpu-pro=25.10-2203192.24.04 \
            rocm-opencl-runtime=6.4.4.60404-129~24.04
    fi
    rm -f /tmp/intel-graphics.key /tmp/intel-igc-core.deb /tmp/intel-igc-opencl.deb /tmp/intel-opencl-icd-legacy1.deb
fi
ldconfig
rm -rf /var/lib/apt/lists/*
GPU_INSTALL

# NVIDIA CUDA runtime libraries remain provided by the CUDA 12.8 noble repository.
# Chrome is used by Zendriver for Twitter, and the fonts cover Japanese UI/subtitles.
RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates curl gpg git tzdata \
    && curl -fsSL https://dl.google.com/linux/linux_signing_key.pub | gpg --batch --yes --dearmor -o /usr/share/keyrings/google-chrome-keyring.gpg \
    && echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome-keyring.gpg] https://dl.google.com/linux/chrome/deb/ stable main' > /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        libfontconfig1 libfreetype6 libfribidi0 cuda-nvrtc-12-8 libnpp-12-8 \
        google-chrome-stable fonts-vlgothic \
    && rm -rf /var/lib/apt/lists/*

# ダウンロードしておいたサードパーティーライブラリをコピー
WORKDIR /code/server/
COPY --from=thirdparty-downloader /thirdparty/ /code/server/thirdparty/

# Poetry の依存パッケージリストだけをコピー
COPY ./server/pyproject.toml ./server/poetry.lock ./server/poetry.toml /code/server/

# 依存パッケージを poetry でインストール
## 仮想環境 (.venv) をプロジェクト直下に作成する
RUN /code/server/thirdparty/Python/bin/python -m poetry env use /code/server/thirdparty/Python/bin/python && \
    /code/server/thirdparty/Python/bin/python -m poetry install --only main --no-root

# サーバーのソースコードをコピー
COPY ./server/ /code/server/

# クライアントのビルド成果物 (dist) だけをコピー
COPY --from=client-builder /code/client/dist/ /code/client/dist/

# config.example.yaml をコピー
COPY ./config.example.yaml /code/config.example.yaml

# KonomiTV サーバーを起動
ENTRYPOINT ["/code/server/.venv/bin/python", "KonomiTV.py"]
