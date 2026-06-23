
from __future__ import annotations

import asyncio
from datetime import datetime
from typing import Any, Final

import aiohttp
from fastapi import HTTPException, UploadFile, status

from app import logging, schemas
from app.constants import JST
from app.models.MisskeyAccount import MisskeyAccount


class MisskeyAPI:
    """
    Misskey の REST API を aiohttp 経由で呼び出すクライアント。
    インスタンスごと・アカウントごとに生成し、アクセストークンの復号は呼び出し元で済ませてから渡す。
    投稿系・ドライブ系・タイムライン取得など、KonomiTV が必要とする操作を一通り提供する。
    """

    # 1リクエストあたりのタイムアウト秒数
    REQUEST_TIMEOUT: Final[float] = 30.0
    # 画像ファイルの最大アップロードサイズ (16 MiB)
    MAX_IMAGE_BYTES: Final[int] = 16 * 1024 * 1024
    # タイムライン・検索で取得するノート数
    TIMELINE_LIMIT: Final[int] = 30
    # 一時的な失敗に対するリトライ回数
    API_RETRY_ATTEMPTS: Final[int] = 3
    # リトライ間の基本待ち時間 (秒)
    API_RETRY_BASE_DELAY_SECONDS: Final[float] = 1.0


    def __init__(self, misskey_account: MisskeyAccount) -> None:
        """
        MisskeyAPI のインスタンスを生成する

        Args:
            misskey_account (MisskeyAccount): API 操作に利用する Misskey アカウント (DB ORM インスタンス)
        """

        # API 呼び出しに使う ORM インスタンスと復号済みトークンを保持する
        self.misskey_account = misskey_account
        # decryptAccessToken() は呼び出しのたびに復号処理を行うため、インスタンス生成時に 1 回だけ復号してキャッシュする
        self._access_token = misskey_account.decryptAccessToken()
        # Misskey の REST エンドポイントのベース URL (https:// スキームを補完する)
        self._api_base = f'https://{misskey_account.instance_url}/api'


    @property
    def log_prefix(self) -> str:
        """
        ログ出力時にアカウントを識別する接頭辞を返す

        Returns:
            str: ログ出力用の接頭辞 (例: [MisskeyAPI][misskey.io/@alice])
        """

        return f'[MisskeyAPI][{self.misskey_account.instance_url}/@{self.misskey_account.username}]'


    async def _post(self, endpoint: str, payload: dict[str, Any]) -> dict[str, Any]:
        """
        Misskey API の指定エンドポイントに POST リクエストを送信する

        Args:
            endpoint (str): /api/ 以降のエンドポイントパス (例: 'notes/create')
            payload (dict[str, Any]): リクエストボディ (アクセストークンは自動で追加される)

        Returns:
            dict[str, Any]: レスポンス JSON

        Raises:
            aiohttp.ClientError: 通信エラー
            HTTPException: Misskey API がエラーを返した場合
        """

        # 全リクエストにアクセストークンを自動付与する
        payload['i'] = self._access_token
        timeout = aiohttp.ClientTimeout(total=self.REQUEST_TIMEOUT)

        for attempt in range(1, self.API_RETRY_ATTEMPTS + 1):
            try:
                async with aiohttp.ClientSession(timeout=timeout) as session:
                    async with session.post(f'{self._api_base}/{endpoint}', json=payload) as response:
                        response_json: dict[str, Any] = await response.json(content_type=None)

                        if response.status == 200:
                            return response_json

                        # Misskey API のエラーレスポンスは {"error": {"code": "...", "message": "..."}} の形式
                        error_info = response_json.get('error', {})
                        error_code = error_info.get('code', 'UNKNOWN')
                        error_message = error_info.get('message', str(response_json))
                        logging.warning(
                            f'{self.log_prefix} Misskey API error. '
                            f'[endpoint: {endpoint}, status: {response.status}, code: {error_code}, message: {error_message}]',
                        )
                        raise HTTPException(
                            status_code = response.status,
                            detail = f'Misskey API error: {error_code} - {error_message}',
                        )

            except (aiohttp.ServerTimeoutError, aiohttp.ClientConnectionError) as ex:
                # 通信タイムアウトや接続切断は一時的な失敗として最大 API_RETRY_ATTEMPTS 回まで再試行する
                is_last_attempt = attempt >= self.API_RETRY_ATTEMPTS
                if is_last_attempt:
                    raise
                retry_delay = self.API_RETRY_BASE_DELAY_SECONDS * attempt
                logging.warning(
                    f'{self.log_prefix} Transient error, retrying. '
                    f'[endpoint: {endpoint}, attempt: {attempt}/{self.API_RETRY_ATTEMPTS}]',
                    exc_info=ex,
                )
                await asyncio.sleep(retry_delay)

        # for ループが通常終了することはないが、型チェッカーのために明示する
        raise RuntimeError(f'Misskey API retry loop unexpectedly finished. [endpoint: {endpoint}]')


    async def _uploadFile(self, file_bytes: bytes, filename: str) -> str:
        """
        ファイルを Misskey のドライブにアップロードし、ファイル ID を返す

        Args:
            file_bytes (bytes): アップロードするファイルのバイナリデータ
            filename (str): ファイル名

        Returns:
            str: アップロードされたファイルの ID
        """

        # multipart/form-data でアクセストークンとファイルを送信する
        timeout = aiohttp.ClientTimeout(total=self.REQUEST_TIMEOUT * 2)  # アップロードは長めに待つ
        async with aiohttp.ClientSession(timeout=timeout) as session:
            form_data = aiohttp.FormData()
            form_data.add_field('i', self._access_token)
            # ドライブフォルダ ID が設定されている場合は、指定フォルダへ保存する
            if self.misskey_account.drive_folder_id is not None:
                form_data.add_field('folderId', self.misskey_account.drive_folder_id)
            form_data.add_field('name', filename)
            form_data.add_field('isSensitive', 'false')
            form_data.add_field('force', 'false')
            form_data.add_field('file', file_bytes, filename=filename, content_type='image/jpeg')

            async with session.post(f'{self._api_base}/drive/files/create', data=form_data) as response:
                response_json: dict[str, Any] = await response.json(content_type=None)

                if response.status == 200:
                    file_id: str = response_json['id']
                    return file_id

                error_info = response_json.get('error', {})
                error_code = error_info.get('code', 'UNKNOWN')
                error_message = error_info.get('message', str(response_json))
                logging.error(
                    f'{self.log_prefix} Failed to upload file to Misskey drive. '
                    f'[code: {error_code}, message: {error_message}]',
                )
                raise HTTPException(
                    status_code = response.status,
                    detail = f'Failed to upload file to Misskey drive: {error_code}',
                )


    def _formatNote(self, note: dict[str, Any]) -> schemas.Tweet:
        """
        Misskey のノートオブジェクトを KonomiTV 共通の Tweet スキーマへ変換する

        Args:
            note (dict[str, Any]): Misskey API から返されたノートオブジェクト

        Returns:
            schemas.Tweet: KonomiTV 共通の Tweet スキーマ
        """

        user_obj: dict[str, Any] = note.get('user', {})
        author_username: str = user_obj.get('username', '')
        author_name: str = user_obj.get('name') or author_username

        tweet_user = schemas.TweetUser(
            source='Misskey',
            id=user_obj.get('id', ''),
            name=author_name,
            screen_name=f'{author_username}@{self.misskey_account.instance_url}',
            icon_url=user_obj.get('avatarUrl') or '',
        )

        # ノートに添付された画像ファイルの URL を収集する (動画・音声は除外)
        files: list[dict[str, Any]] = note.get('files', [])
        image_urls: list[str] = [
            f.get('thumbnailUrl') or f.get('url', '')
            for f in files
            if f.get('type', '').startswith('image/')
        ]

        # Misskey のリノート (RN) を Twitter のリツイートとして表現する
        renote_obj: dict[str, Any] | None = note.get('renote')
        retweeted_tweet: schemas.Tweet | None = None
        if renote_obj is not None and note.get('text') is None:
            # text が None かつ renote が存在する = 純粋なリノート = RT 相当
            retweeted_tweet = self._formatNote(renote_obj)

        created_at_str: str = note.get('createdAt', '')
        created_at = self._parseDateTime(created_at_str)

        return schemas.Tweet(
            source='Misskey',
            id=note.get('id', ''),
            created_at=created_at,
            user=tweet_user,
            text=note.get('text') or '',
            lang='',
            via='',
            image_urls=image_urls if len(image_urls) > 0 else None,
            movie_url=None,
            retweet_count=note.get('renoteCount', 0),
            favorite_count=sum(note.get('reactions', {}).values()),
            retweeted=False,  # Misskey の API からは自分がリノートしたか判定できないため常に False
            favorited=note.get('myReaction') is not None,
            retweeted_tweet=retweeted_tweet,
            quoted_tweet=None,
        )


    @staticmethod
    def _parseDateTime(datetime_text: str) -> datetime:
        """
        Misskey API の ISO 8601 日時文字列を JST の datetime に変換する

        Args:
            datetime_text (str): ISO 8601 形式の日時文字列

        Returns:
            datetime: JST に変換済みの日時
        """

        try:
            return datetime.fromisoformat(datetime_text.replace('Z', '+00:00')).astimezone(JST)
        except (ValueError, AttributeError):
            return datetime.now(JST)


    @staticmethod
    def normalizeInstanceUrl(url: str) -> str:
        """
        ユーザーが入力した Misskey インスタンス URL をホスト名のみに正規化する

        Args:
            url (str): ユーザーが入力したインスタンス URL または ホスト名 (例: "https://misskey.io/", "misskey.io")

        Returns:
            str: スキーム・末尾スラッシュを除いたホスト名 (例: "misskey.io")
        """

        normalized = url.strip()
        # https:// / http:// スキームを除去する
        for prefix in ('https://', 'http://'):
            if normalized.lower().startswith(prefix):
                normalized = normalized[len(prefix):]
                break
        # パス・クエリ・フラグメントを除去してホスト名のみを残す
        normalized = normalized.split('/')[0].split('?')[0].split('#')[0].strip()
        return normalized.lower()


    @staticmethod
    async def authenticate(instance_url: str, access_token: str) -> MisskeyAccount:
        """
        Misskey のアクセストークンで認証し、MisskeyAccount ORM インスタンスを返す

        Args:
            instance_url (str): Misskey インスタンスのホスト名 (例: "misskey.io")
            access_token (str): Misskey の API アクセストークン

        Returns:
            MisskeyAccount: 認証結果から作成した未保存の MisskeyAccount ORM インスタンス

        Raises:
            HTTPException: 認証に失敗した場合
        """

        normalized_instance = MisskeyAPI.normalizeInstanceUrl(instance_url)
        api_url = f'https://{normalized_instance}/api/i'
        timeout = aiohttp.ClientTimeout(total=30.0)

        try:
            async with aiohttp.ClientSession(timeout=timeout) as session:
                async with session.post(api_url, json={'i': access_token}) as response:
                    if response.status != 200:
                        logging.error(
                            f'[MisskeyAPI][authenticate] Authentication failed. '
                            f'[instance: {normalized_instance}, status: {response.status}]',
                        )
                        raise HTTPException(
                                status_code = status.HTTP_422_UNPROCESSABLE_ENTITY,
                                detail = 'Failed to authenticate with Misskey. Please check your instance URL and access token.',
                            )
                    profile_raw: Any = await response.json(content_type=None)
        except (aiohttp.ClientConnectionError, aiohttp.ServerTimeoutError) as ex:
            logging.error(
                f'[MisskeyAPI][authenticate] Connection error. [instance: {normalized_instance}]',
                exc_info=ex,
            )
            raise HTTPException(
                status_code = status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail = f'Failed to connect to Misskey instance: {normalized_instance}',
            ) from ex

        # Misskey の /api/i は基本的に dict を返すが、インスタンス実装差異で list が返るケースがあるため吸収する
        profile: dict[str, Any] | None = None
        if isinstance(profile_raw, dict):
            profile = profile_raw
        elif isinstance(profile_raw, list):
            for item in profile_raw:
                if isinstance(item, dict) and isinstance(item.get('id'), str) and isinstance(item.get('username'), str):
                    profile = item
                    break

        if profile is None:
            logging.error(
                f'[MisskeyAPI][authenticate] Unexpected profile response format. '
                f'[instance: {normalized_instance}, type: {type(profile_raw).__name__}]',
            )
            raise HTTPException(
                status_code = status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail = 'Misskey authentication returned an unexpected response format.',
            )

        misskey_user_id = profile.get('id', '')
        username = profile.get('username', '')
        if not isinstance(misskey_user_id, str) or not isinstance(username, str) or misskey_user_id == '' or username == '':
            logging.error(
                f'[MisskeyAPI][authenticate] Required fields are missing in profile response. '
                f'[instance: {normalized_instance}]',
            )
            raise HTTPException(
                status_code = status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail = 'Misskey authentication response did not include required profile fields.',
            )

        account = MisskeyAccount(
            instance_url=normalized_instance,
            misskey_user_id=misskey_user_id,
            username=username,
            name=profile.get('name') or username,
            icon_url=profile.get('avatarUrl') or '',
            access_token='',
            visibility='home',
            channel_id=None,
            drive_folder_id=None,
        )
        # アクセストークンは平文で保存せず、暗号化してからフィールドに設定する
        account.access_token = account.encryptAccessToken(access_token)
        return account


    async def createNote(
        self,
        text: str,
        images: list[UploadFile],
    ) -> schemas.PostTweetResult | schemas.TwitterAPIResult:
        """
        Misskey にノートを投稿する

        Args:
            text (str): ノートの本文
            images (list[UploadFile]): 添付する画像ファイルのリスト

        Returns:
            schemas.PostTweetResult | schemas.TwitterAPIResult: 投稿結果
        """

        # Misskey は最大 16 枚の画像を添付できるが、UI との整合性のため 4 枚に制限する
        if len(images) > 4:
            return schemas.TwitterAPIResult(
                is_success=False,
                detail='Misskey への投稿に添付できる画像は 4 枚までです。',
            )

        try:
            # 画像を先に Misskey のドライブへアップロードし、ファイル ID を収集する
            file_ids: list[str] = []
            if len(images) > 0:
                # 複数画像は並行してアップロードし、待ち時間を短縮する
                upload_tasks = [
                    self._uploadFile(await image.read(), image.filename or f'capture_{i}.jpg')
                    for i, image in enumerate(images)
                ]
                file_ids = list(await asyncio.gather(*upload_tasks))

            # text が空文字のみで画像もない投稿は Misskey 側で INVALID_PARAM になるため、事前に弾く
            note_text = text.strip()
            if note_text == '' and len(file_ids) == 0:
                return schemas.TwitterAPIResult(
                    is_success=False,
                    detail='Misskey への投稿内容が空です。本文か画像を指定してください。',
                )

            # ノート投稿ペイロードを組み立てる
            # Misskey の OpenAPI 上で null 不可のフィールドへ None を送ると INVALID_PARAM になるため、必要なキーだけ送る
            payload: dict[str, Any] = {
                'visibility': self.misskey_account.visibility,
            }
            if note_text != '':
                payload['text'] = note_text
            if len(file_ids) > 0:
                payload['fileIds'] = file_ids

            if self.misskey_account.channel_id is not None:
                # チャンネルへの投稿: visibility は必ず 'public' にする必要がある
                payload['channelId'] = self.misskey_account.channel_id
                payload['visibility'] = 'public'

            response = await self._post('notes/create', payload)

        except HTTPException as ex:
            logging.error(f'{self.log_prefix} Failed to create note:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail=f'Misskey へのノート投稿に失敗しました。({ex.detail})',
            )
        except Exception as ex:
            logging.error(f'{self.log_prefix} Failed to create note:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail='Misskey へのノート投稿に失敗しました。',
            )

        created_note: dict[str, Any] = response.get('createdNote', {})
        note_id: str = created_note.get('id', '')
        # Misskey のノート URL は https://{instance}/@{username}/{note_id} の形式
        note_url = f'https://{self.misskey_account.instance_url}/notes/{note_id}'
        return schemas.PostTweetResult(
            is_success=True,
            detail='Misskey にノートを投稿しました。',
            tweet_url=note_url,
            tweet_id=note_id,
            post_uri=None,
            post_cid=None,
        )


    async def homeTimeline(
        self,
        until_id: str | None = None,
    ) -> schemas.TimelineTweetsResult | schemas.TwitterAPIResult:
        """
        Misskey のホームタイムラインを取得する

        Args:
            until_id (str | None, optional): このノート ID より古いノートを取得する (ページングカーソル)

        Returns:
            schemas.TimelineTweetsResult | schemas.TwitterAPIResult: タイムライン取得結果
        """

        try:
            payload: dict[str, Any] = {'limit': self.TIMELINE_LIMIT}
            if until_id is not None:
                payload['untilId'] = until_id

            notes: list[dict[str, Any]] = await self._post('notes/timeline', payload)  # type: ignore[assignment]
        except Exception as ex:
            logging.error(f'{self.log_prefix} Failed to fetch home timeline:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail='Misskey のタイムライン取得に失敗しました。',
            )

        tweets = [self._formatNote(note) for note in notes]
        # タイムラインの次ページカーソルは最後のノードの ID を untilId として渡す
        next_cursor = tweets[-1].id if len(tweets) > 0 else None
        return schemas.TimelineTweetsResult(
            is_success=True,
            detail='Misskey のタイムラインを取得しました。',
            tweets=tweets,
            newer_cursor_id=None,
            load_more_cursors=[
                schemas.TimelineLoadMoreCursor(
                    cursor_type='Older',
                    cursor_id=next_cursor,
                    entry_id=None,
                    upper_created_at=tweets[-1].created_at if len(tweets) > 0 else None,
                    lower_created_at=None,
                )
            ] if next_cursor is not None else [],
            is_cursor_consumed=True,
        )


    async def renote(self, note_id: str) -> schemas.TwitterAPIResult:
        """
        指定されたノートをリノートする

        Args:
            note_id (str): リノート対象のノート ID

        Returns:
            schemas.TwitterAPIResult: リノート結果
        """

        try:
            # Misskey ではリノートも notes/create に renoteId を渡すことで行う
            # visibility は既存の設定に従うが、チャンネルへのリノートは行わないため channelId は渡さない
            await self._post('notes/create', {'renoteId': note_id, 'visibility': self.misskey_account.visibility})
        except HTTPException as ex:
            logging.error(f'{self.log_prefix} Failed to renote note:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail=f'リノートに失敗しました。({ex.detail})',
            )
        except Exception as ex:
            logging.error(f'{self.log_prefix} Failed to renote note:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail='リノートに失敗しました。',
            )

        return schemas.TwitterAPIResult(is_success=True, detail='リノートしました。')


    async def unrenote(self, note_id: str) -> schemas.TwitterAPIResult:
        """
        指定されたノートのリノートを取り消す

        Args:
            note_id (str): リノート取り消し対象のノート ID

        Returns:
            schemas.TwitterAPIResult: リノート取り消し結果
        """

        try:
            await self._post('notes/unrenote', {'noteId': note_id})
        except HTTPException as ex:
            logging.error(f'{self.log_prefix} Failed to unrenote note:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail=f'リノートの取り消しに失敗しました。({ex.detail})',
            )
        except Exception as ex:
            logging.error(f'{self.log_prefix} Failed to unrenote note:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail='リノートの取り消しに失敗しました。',
            )

        return schemas.TwitterAPIResult(is_success=True, detail='リノートを取り消しました。')


    async def createReaction(self, note_id: str, reaction: str) -> schemas.TwitterAPIResult:
        """
        指定されたノートにリアクションを追加する

        Args:
            note_id (str): リアクション対象のノート ID
            reaction (str): リアクション名 (例: ':like:', '👍', ':custom_emoji:')

        Returns:
            schemas.TwitterAPIResult: リアクション追加結果
        """

        try:
            await self._post('notes/reactions/create', {'noteId': note_id, 'reaction': reaction})
        except HTTPException as ex:
            logging.error(f'{self.log_prefix} Failed to create reaction:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail=f'リアクションの追加に失敗しました。({ex.detail})',
            )
        except Exception as ex:
            logging.error(f'{self.log_prefix} Failed to create reaction:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail='リアクションの追加に失敗しました。',
            )

        return schemas.TwitterAPIResult(is_success=True, detail='リアクションを追加しました。')


    async def deleteReaction(self, note_id: str) -> schemas.TwitterAPIResult:
        """
        指定されたノートのリアクションを削除する

        Args:
            note_id (str): リアクション削除対象のノート ID

        Returns:
            schemas.TwitterAPIResult: リアクション削除結果
        """

        try:
            await self._post('notes/reactions/delete', {'noteId': note_id})
        except HTTPException as ex:
            logging.error(f'{self.log_prefix} Failed to delete reaction:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail=f'リアクションの削除に失敗しました。({ex.detail})',
            )
        except Exception as ex:
            logging.error(f'{self.log_prefix} Failed to delete reaction:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail='リアクションの削除に失敗しました。',
            )

        return schemas.TwitterAPIResult(is_success=True, detail='リアクションを削除しました。')


    async def getEmojis(self) -> schemas.MisskeyEmojisResult:
        """
        インスタンスのカスタム絵文字一覧を取得する

        Returns:
            schemas.MisskeyEmojisResult: カスタム絵文字一覧の取得結果
        """

        # emojis エンドポイントはインスタンスによっては認証不要だが、統一的に認証ありで呼ぶ
        try:
            response: dict[str, Any] = await self._post('emojis', {})
        except HTTPException as ex:
            logging.error(f'{self.log_prefix} Failed to fetch emojis:', exc_info=ex)
            return schemas.MisskeyEmojisResult(
                is_success=False,
                detail=f'カスタム絵文字の取得に失敗しました。({ex.detail})',
                emojis=[],
            )
        except Exception as ex:
            logging.error(f'{self.log_prefix} Failed to fetch emojis:', exc_info=ex)
            return schemas.MisskeyEmojisResult(
                is_success=False,
                detail='カスタム絵文字の取得に失敗しました。',
                emojis=[],
            )

        raw_emojis: list[dict[str, Any]] = response.get('emojis', [])
        emojis: list[schemas.MisskeyEmoji] = [
            schemas.MisskeyEmoji(
                name=e.get('name', ''),
                category=e.get('category') or None,
                aliases=e.get('aliases', []),
                url=e.get('url', ''),
            )
            for e in raw_emojis
            if e.get('name') and e.get('url')
        ]

        return schemas.MisskeyEmojisResult(
            is_success=True,
            detail=f'カスタム絵文字を {len(emojis)} 件取得しました。',
            emojis=emojis,
        )


    async def searchNotes(
        self,
        query: str,
        until_id: str | None = None,
    ) -> schemas.TimelineTweetsResult | schemas.TwitterAPIResult:
        """
        Misskey のノートを検索する

        Args:
            query (str): 検索クエリ
            until_id (str | None, optional): このノート ID より古いノートを取得する (ページングカーソル)

        Returns:
            schemas.TimelineTweetsResult | schemas.TwitterAPIResult: 検索結果
        """

        try:
            payload: dict[str, Any] = {'query': query, 'limit': self.TIMELINE_LIMIT}
            if until_id is not None:
                payload['untilId'] = until_id

            notes: list[dict[str, Any]] = await self._post('notes/search', payload)  # type: ignore[assignment]
        except Exception as ex:
            logging.error(f'{self.log_prefix} Failed to search notes:', exc_info=ex)
            return schemas.TwitterAPIResult(
                is_success=False,
                detail='Misskey のノート検索に失敗しました。',
            )

        tweets = [self._formatNote(note) for note in notes]
        next_cursor = tweets[-1].id if len(tweets) > 0 else None
        return schemas.TimelineTweetsResult(
            is_success=True,
            detail='Misskey のノート検索結果を取得しました。',
            tweets=tweets,
            newer_cursor_id=None,
            load_more_cursors=[
                schemas.TimelineLoadMoreCursor(
                    cursor_type='Older',
                    cursor_id=next_cursor,
                    entry_id=None,
                    upper_created_at=tweets[-1].created_at if len(tweets) > 0 else None,
                    lower_created_at=None,
                )
            ] if next_cursor is not None else [],
            is_cursor_consumed=True,
        )

