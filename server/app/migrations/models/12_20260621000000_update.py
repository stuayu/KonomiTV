from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "misskey_accounts" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            "instance_url" TEXT NOT NULL,
            "misskey_user_id" TEXT NOT NULL,
            "username" TEXT NOT NULL,
            "name" TEXT NOT NULL,
            "icon_url" TEXT NOT NULL,
            "access_token" TEXT NOT NULL,
            "visibility" TEXT NOT NULL DEFAULT 'home',
            "channel_id" TEXT,
            "drive_folder_id" TEXT,
            "created_at" TIMESTAMP NOT NULL,
            "updated_at" TIMESTAMP NOT NULL,
            "user_id" INT NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
            UNIQUE ("user_id", "instance_url", "misskey_user_id")
        );
    """


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        DROP TABLE IF EXISTS "misskey_accounts";
    """
