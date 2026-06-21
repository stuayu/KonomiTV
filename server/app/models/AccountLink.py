
# Type Hints を指定できるように
# ref: https://stackoverflow.com/a/33533514/17124142
from __future__ import annotations

from typing import TYPE_CHECKING

from tortoise import fields
from tortoise.models import Model as TortoiseModel


if TYPE_CHECKING:
    from app.models.BlueskyAccount import BlueskyAccount
    from app.models.MisskeyAccount import MisskeyAccount
    from app.models.TwitterAccount import TwitterAccount
    from app.models.User import User


class AccountLink(TortoiseModel):
    """
    KonomiTV ユーザーアカウントに紐づく SNS アカウント間の紐付け情報を管理するモデル。
    Twitter / Bluesky / Misskey のうち任意の 2 サービス間を結び、同時投稿やタイムライン統合に使う。
    各アカウントフィールドは nullable であり、いずれか 2 つ以上が非 null になる必要がある
    (アプリケーション層でバリデーションする) 。
    DB の UNIQUE 制約により 1 アカウントが複数の紐付けに重複登録されることを防ぐ。
    """

    # データベース上のテーブル名
    class Meta(TortoiseModel.Meta):
        table: str = 'account_links'

    id = fields.IntField(pk=True)
    # 紐付けを所有する KonomiTV ユーザー
    # ユーザー削除時は送信先設定としての紐付けも不要になるため cascade で削除する
    user: fields.ForeignKeyRelation[User] = \
        fields.ForeignKeyField('models.User', related_name='account_links', on_delete=fields.CASCADE)
    user_id: int
    # 紐付け対象の Twitter アカウント (Twitter を含まない紐付けでは None)
    # OneToOneField + null=True: SQLite は NULL を UNIQUE 違反とみなさないため複数の None を許容する
    # OneToOneField は非 null 前提の型を返すが、null=True を渡すと実際には nullable になる
    # 型注釈は OneToOneNullableRelation[T] で上書きし、pyright の誤検知を # type: ignore で抑制する
    twitter_account: fields.OneToOneNullableRelation[TwitterAccount] = \
        fields.OneToOneField('models.TwitterAccount', related_name='account_link',  # type: ignore[assignment]
                             on_delete=fields.CASCADE, null=True)
    twitter_account_id: int | None
    # 紐付け対象の Bluesky アカウント (Bluesky を含まない紐付けでは None)
    bluesky_account: fields.OneToOneNullableRelation[BlueskyAccount] = \
        fields.OneToOneField('models.BlueskyAccount', related_name='account_link',  # type: ignore[assignment]
                             on_delete=fields.CASCADE, null=True)
    bluesky_account_id: int | None
    # 紐付け対象の Misskey アカウント (Misskey を含まない紐付けでは None)
    misskey_account: fields.OneToOneNullableRelation[MisskeyAccount] = \
        fields.OneToOneField('models.MisskeyAccount', related_name='account_link',  # type: ignore[assignment]
                             on_delete=fields.CASCADE, null=True)
    misskey_account_id: int | None
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)
