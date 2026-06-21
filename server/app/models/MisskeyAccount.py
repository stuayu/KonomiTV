
# Type Hints を指定できるように
# ref: https://stackoverflow.com/a/33533514/17124142
from __future__ import annotations

from typing import TYPE_CHECKING, cast

from cryptography.fernet import InvalidToken
from fastapi import HTTPException, status
from tortoise import fields
from tortoise.fields import Field as TortoiseField
from tortoise.models import Model as TortoiseModel

from app import logging
from app.constants import (
    MISSKEY_ACCOUNT_TOKEN_ENCRYPTION_PREFIX,
    MISSKEY_ACCOUNT_TOKEN_FERNET,
)


if TYPE_CHECKING:
    from app.models.User import User


class MisskeyAccount(TortoiseModel):
    """
    KonomiTV ユーザーアカウントに紐づく Misskey アカウントの連携情報を管理するモデル。
    1ユーザーが複数のインスタンス・複数アカウントを持てるよう、(user, instance_url, misskey_user_id) の複合ユニーク制約とする。
    アクセストークンは Fernet で暗号化してから保存し、平文のトークンは一切 DB に残さない。
    """

    # データベース上のテーブル名
    class Meta(TortoiseModel.Meta):
        table: str = 'misskey_accounts'
        # 同一ユーザーが同一インスタンスの同一アカウントを二重登録しないための制約
        unique_together = (('user', 'instance_url', 'misskey_user_id'),)

    id = fields.IntField(pk=True)
    # KonomiTV のユーザーアカウントと Misskey アカウントを紐づける
    # ユーザー削除時は認証情報を同時に削除すべきなので cascade を指定
    user: fields.ForeignKeyRelation[User] = \
        fields.ForeignKeyField('models.User', related_name='misskey_accounts', on_delete=fields.CASCADE)
    user_id: int
    # Misskey インスタンスのホスト名 (例: "misskey.io")
    # https:// などのスキームは含まず、ホスト名のみを保存する
    instance_url = fields.TextField()
    # Misskey 側のユーザー ID (例: "9abcdef01234")
    # handle (@username) は変更可能だが、ユーザー ID は変わらないため同一アカウントの識別に使う
    misskey_user_id = fields.TextField()
    # @username 部分 (@ は含まない, e.g., "alice")
    username = fields.TextField()
    # 表示名
    name = fields.TextField()
    # アバター画像の URL
    icon_url = fields.TextField()
    # アクセストークン (暗号化して保存)
    access_token = fields.TextField()
    # ノートのデフォルト公開範囲: public / home / followers / specified
    visibility = fields.TextField(default='home')
    # 投稿先のチャンネル ID (None の場合はチャンネルなしで投稿)
    channel_id = cast(TortoiseField[str | None], fields.TextField(null=True))
    # 画像アップロード先のドライブフォルダ ID (None の場合はルートに保存)
    drive_folder_id = cast(TortoiseField[str | None], fields.TextField(null=True))
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)


    def encryptAccessToken(self, plain_text: str) -> str:
        """
        Misskey アクセストークンを Fernet で暗号化する

        Args:
            plain_text (str): 暗号化前のアクセストークン

        Returns:
            str: 暗号化済みのアクセストークン
        """

        # 空文字は暗号化不要なのでそのまま返し、無駄な処理を避ける
        if plain_text == '':
            return ''

        # Fernet で暗号化し、接頭辞を付けて暗号化済みであることを明示する
        encrypted_text = MISSKEY_ACCOUNT_TOKEN_FERNET.encrypt(plain_text.encode('utf-8')).decode('utf-8')
        return f'{MISSKEY_ACCOUNT_TOKEN_ENCRYPTION_PREFIX}{encrypted_text}'


    def decryptAccessToken(self) -> str:
        """
        データベースに保存されているアクセストークンを復号する

        Returns:
            str: 復号済みのアクセストークン
        """

        encrypted_text = self.access_token or ''
        if encrypted_text == '':
            return ''

        # 接頭辞がない場合は（旧データや未暗号化トークン）そのまま平文として扱う
        if encrypted_text.startswith(MISSKEY_ACCOUNT_TOKEN_ENCRYPTION_PREFIX) is False:
            return encrypted_text

        # 接頭辞を除去してから復号する
        token = encrypted_text[len(MISSKEY_ACCOUNT_TOKEN_ENCRYPTION_PREFIX):].encode('utf-8')
        try:
            decrypted_text = MISSKEY_ACCOUNT_TOKEN_FERNET.decrypt(token).decode('utf-8')
        except InvalidToken as ex:
            logging.error('[MisskeyAccount][decryptAccessToken] Failed to decrypt access token:', exc_info=ex)
            raise HTTPException(
                status_code = status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail = 'Failed to decrypt Misskey access token. Please re-link your Misskey account.',
            ) from ex

        return decrypted_text
