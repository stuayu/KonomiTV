import aiohttp
import asyncio
import random
from typing import List

from app import logging

from misskey import Misskey


class MisskeyPost:
    """
    Misskey でメッセージを送信するクラス
    """

    def __init__(
        self,
        instance_url: str = "misskey.io",
        access_token: str = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        visibility: str = "home",
        channelId: str = "9bem66cfb8",
        logger: None = logging,  # type: ignore
        image_upload_drive_id: str | None = "XXXXXXXXXXXXXXXXXXX",
    ):
        """初期化

        Args:
            instance_url (str): 投稿するインスタンスアドレス
            access_token (str): アクセストークン
            visibility (str): 投稿先の表示条件
            image_upload_drive_id (str | None, optional): ドライブフォルダのID. Defaults to None.
        """
        try:
            self.misskey = Misskey(address=instance_url, i=access_token)
            self.instance_url = instance_url
            self.access_token = access_token
            self.visibility = visibility
            self.logger = logging
            self.channelId = channelId
            self.image_upload_drive_id = image_upload_drive_id
        except Exception as e:
            MisskeyPost.errorMisskeyPy(self, e)

    async def sendAttachedMessage(self, message_misskey: str, file_ids: List[str]):
        """画像つきノートを投稿する

        Args:
            message_misskey (str): ノート本文
            file_ids (List): アップロードした画像のIDが入っているリスト
        """
        if len(file_ids) <= 0:
            return await MisskeyPost.sendMessage(self, message_misskey=message_misskey)
        for i in range(0, 4):
            try:
                async with aiohttp.ClientSession() as session:
                    if self.channelId is None:
                        # self.misskey.notes_create(
                        #     message_misskey, file_ids=file_ids, visibility=self.visibility
                        # )
                        payload = {
                            "i": self.access_token,
                            "text": message_misskey,
                            "poll": None,
                            "cw": None,
                            "localOnly": True,
                            "visibility": self.visibility,
                            "reactionAcceptance": None
                        }
                    else:
                        payload = {
                            "i": self.access_token,
                            "text": message_misskey,
                            "fileIds": file_ids,
                            "channelId": self.channelId,
                            "poll": None,
                            "cw": None,
                            "localOnly": True,
                            "visibility": self.visibility,
                            "reactionAcceptance": None
                        }
                    async with session.post(f'https://{self.instance_url}/api/notes/create', json=payload) as response:
                        self.logger.debug(f"ステータスコード: {response.status}")
                        response_text = await response.text()
                        self.logger.debug(f"レスポンス本文: {response_text}")

                        if response.status == 200:
                            self.logger.debug(f"投稿が完了しました。{await response.json()}")
                        else:
                            self.logger.debug("投稿に失敗しました。")
                            try:
                                error_response = await response.json()
                                self.logger.debug(f'エラーメッセージ:{error_response.get("error", "No error message provided")}')
                            except aiohttp.ClientResponseError:
                                self.logger.debug(f"エラーメッセージ:{response_text}")
                break
            except Exception as e:
                if (
                    getattr(e, "code", None)
                    == "TIMELINE_HAYASUGI_YABAI"
                ):
                    await asyncio.sleep(60 * (i + 1))
                    continue
                elif (
                    getattr(e, "code", None) == "INVALID_PARAM"
                    or getattr(e, "code", None) == "NO_FREE_SPACE"
                    or getattr(e, "code", None) == "RATE_LIMIT_EXCEEDED"
                ):
                    await MisskeyPost.sendMessage(self, message_misskey=message_misskey)
                    break
                else:
                    await asyncio.sleep(random.randint(5, 60))

    async def sendMessage(self, message_misskey: str):
        """ノートを投稿する

        Args:
            message_misskey (str): ノート本文
        """
        for i in range(0, 4):
            try:
                self.logger.debug(f"message: {message_misskey}")
                async with aiohttp.ClientSession() as session:
                    if self.channelId is None:
                        # res = self.misskey.notes_create(
                        #     text=message_misskey, visibility=self.visibility
                        # )
                        # self.logger.debug(f"res: {res}")
                        payload = {
                            "i": self.access_token,
                            "text": message_misskey,
                            "poll": None,
                            "cw": None,
                            "localOnly": True,
                            "visibility": self.visibility,
                            "reactionAcceptance": None
                        }
                    else:
                        payload = {
                            "i": self.access_token,
                            "text": message_misskey,
                            "channelId": self.channelId,
                            "poll": None,
                            "cw": None,
                            "localOnly": True,
                            "visibility": self.visibility,
                            "reactionAcceptance": None
                        }
                    async with session.post(f'https://{self.instance_url}/api/notes/create', json=payload) as response:
                        self.logger.debug(f"ステータスコード: {response.status}")
                        response_text = await response.text()
                        self.logger.debug(f"レスポンス本文: {response_text}")

                        if response.status == 200:
                            self.logger.debug(f"投稿が完了しました。{await response.json()}")
                        else:
                            self.logger.debug("投稿に失敗しました。")
                            try:
                                error_response = await response.json()
                                self.logger.debug(f'エラーメッセージ:{error_response.get("error", "No error message provided")}')
                            except aiohttp.ClientResponseError:
                                self.logger.debug(f"エラーメッセージ:{response_text}")
                break
            except Exception as e:
                self.logger.error("ノートの作成に失敗しました。")
                self.logger.error(f"code: {getattr(e, 'code', 'N/A')}")
                MisskeyPost.errorMisskeyPy(self, e)
                if (
                    getattr(e, "code", None) == "TIMELINE_HAYASUGI_YABAI"
                    or getattr(e, "code", None) == "RATE_LIMIT_EXCEEDED"
                ):
                    await asyncio.sleep(60 * (i + 1))
                    continue
                elif getattr(e, "code", None) == "INVALID_PARAM":
                    break
                else:
                    await asyncio.sleep(random.randint(5, 60) * (i + 1))
                self.logger.info(f"リトライ{i+1}回目")

    async def uploadPictures(self, file: bytes, filename: str) -> str:
        """画像をMisskeyのドライブにアップロードします。
            ※この機能はドライブへのアクセス権限が必要です。

        Args:
            file (bytes): 画像ファイルのバイナリデータ
            filename (str): 画像ファイルの名前

        Returns:
            str: アップロードした画像のID
        """
        uploaded_media_id = ""

        try:
            async with aiohttp.ClientSession() as client:
                form_data = aiohttp.FormData()
                form_data.add_field('i', self.access_token)
                form_data.add_field('folderId', self.image_upload_drive_id)
                form_data.add_field('name', filename)
                form_data.add_field('isSensitive', 'false')
                form_data.add_field('force', 'false')
                form_data.add_field('file', file, filename=filename)

                async with client.post(f'https://{self.instance_url}/api/drive/files/create', data=form_data) as response:
                    response_data = await response.json()
                    uploaded_media_id = response_data["id"]

        except Exception as e:
            self.logger.error(f"code: {getattr(e, 'code', 'N/A')}")

        return uploaded_media_id

    def errorMisskeyPy(self, ExceptionObject):
        self.logger.debug("errorMisskeyPy: 実行中")
        try:
            self.logger.debug(ExceptionObject, exc_info=True)
            self.logger.error(f"id: {getattr(ExceptionObject, 'id', 'N/A')}")
            self.logger.error(f"code: {getattr(ExceptionObject, 'code', 'N/A')}")
            self.logger.error(f"message: {getattr(ExceptionObject, 'message', 'N/A')}")
        except Exception:
            pass

    if __name__ == "__main__":
        misskey_post_with_image()
