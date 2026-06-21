from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "account_links_new" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            "user_id" INT NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
            "twitter_account_id" INT UNIQUE REFERENCES "twitter_accounts" ("id") ON DELETE CASCADE,
            "bluesky_account_id" INT UNIQUE REFERENCES "bluesky_accounts" ("id") ON DELETE CASCADE,
            "misskey_account_id" INT UNIQUE REFERENCES "misskey_accounts" ("id") ON DELETE CASCADE,
            "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
        INSERT INTO "account_links_new"
            ("id", "user_id", "twitter_account_id", "bluesky_account_id", "misskey_account_id", "created_at", "updated_at")
            SELECT "id", "user_id", "twitter_account_id", "bluesky_account_id", NULL, "created_at", "updated_at"
            FROM "account_links";
        DROP TABLE "account_links";
        ALTER TABLE "account_links_new" RENAME TO "account_links";
    """


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "account_links_new" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            "user_id" INT NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
            "twitter_account_id" INT NOT NULL UNIQUE REFERENCES "twitter_accounts" ("id") ON DELETE CASCADE,
            "bluesky_account_id" INT NOT NULL UNIQUE REFERENCES "bluesky_accounts" ("id") ON DELETE CASCADE,
            "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
        INSERT INTO "account_links_new"
            ("id", "user_id", "twitter_account_id", "bluesky_account_id", "created_at", "updated_at")
            SELECT "id", "user_id", "twitter_account_id", "bluesky_account_id", "created_at", "updated_at"
            FROM "account_links"
            WHERE "twitter_account_id" IS NOT NULL AND "bluesky_account_id" IS NOT NULL;
        DROP TABLE "account_links";
        ALTER TABLE "account_links_new" RENAME TO "account_links";
    """
