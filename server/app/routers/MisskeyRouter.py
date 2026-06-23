
from typing import Annotated

from fastapi import (
    APIRouter,
    Body,
    Depends,
    File,
    HTTPException,
    Path,
    Query,
    UploadFile,
    status,
)
from tortoise.exceptions import IntegrityError

from app import logging, schemas
from app.models.MisskeyAccount import MisskeyAccount
from app.models.User import User
from app.routers.UsersRouter import GetCurrentUser
from app.utils.MisskeyAPI import MisskeyAPI


# ルーター
router = APIRouter(
    tags = ['Misskey'],
    prefix = '/api/misskey',
)


async def GetCurrentMisskeyAccount(
    account_id: Annotated[int, Path(description='Misskey アカウントの DB ID 。')],
    current_user: Annotated[User, Depends(GetCurrentUser)],
) -> MisskeyAccount:
    """ 現在ログイン中のユーザーに紐づく Misskey アカウントを DB ID で取得する """

    # ログイン中ユーザーに紐づくレコードのみを対象にし、他ユーザーの認証情報へ触れないようにする
    misskey_account = await MisskeyAccount.filter(user_id=current_user.id, id=account_id).get_or_none()
    if misskey_account is None:
        logging.error(f'[MisskeyRouter][GetCurrentMisskeyAccount] MisskeyAccount not found. [account_id: {account_id}]')
        raise HTTPException(
            status_code = status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail = 'MisskeyAccount associated with the given ID does not exist',
        )

    return misskey_account


@router.post(
    '/auth',
    summary = 'Misskey 認証 API',
    status_code = status.HTTP_204_NO_CONTENT,
)
async def MisskeyAuthAPI(
    auth_request: Annotated[schemas.MisskeyAuthRequest, Body(description='Misskey 認証リクエスト')],
    current_user: Annotated[User, Depends(GetCurrentUser)],
):
    """
    指定されたインスタンス URL とアクセストークンで Misskey 連携を行い、ログイン中のユーザーアカウントと Misskey アカウントを紐づける。<br>
    同じインスタンスの同じユーザー ID の連携が既に存在する場合はトークンと設定を更新する。<br>
    JWT エンコードされたアクセストークンがリクエストの Authorization: Bearer に設定されていないとアクセスできない。
    """

    # Misskey API で認証し、プロフィール情報を取得して未保存の ORM インスタンスを生成する
    try:
        misskey_account = await MisskeyAPI.authenticate(auth_request.instance_url, auth_request.access_token)
    except HTTPException:
        raise
    except Exception as ex:
        logging.error('[MisskeyRouter][MisskeyAuthAPI] Failed to authenticate with Misskey:', exc_info=ex)
        raise HTTPException(
            status_code = status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail = 'Failed to authenticate with Misskey',
        ) from ex

    # ユーザーに設定された投稿設定をアカウントに反映する
    misskey_account.user = current_user
    misskey_account.visibility = auth_request.visibility
    misskey_account.channel_id = auth_request.channel_id or None
    misskey_account.drive_folder_id = auth_request.drive_folder_id or None

    # 同じインスタンスの同一ユーザー ID の連携が既に存在する場合はトークンと設定を更新する
    existing_account = await MisskeyAccount.filter(
        user_id=current_user.id,
        instance_url=misskey_account.instance_url,
        misskey_user_id=misskey_account.misskey_user_id,
    ).get_or_none()

    if existing_account is not None:
        existing_account.username = misskey_account.username
        existing_account.name = misskey_account.name
        existing_account.icon_url = misskey_account.icon_url
        existing_account.access_token = misskey_account.access_token
        existing_account.visibility = misskey_account.visibility
        existing_account.channel_id = misskey_account.channel_id
        existing_account.drive_folder_id = misskey_account.drive_folder_id
        await existing_account.save()
        logging.info(
            f'[MisskeyRouter][MisskeyAuthAPI] Updated existing Misskey account. '
            f'[id: {existing_account.id}, username: {existing_account.username}@{existing_account.instance_url}]',
        )
        return

    try:
        await misskey_account.save()
    except IntegrityError as ex:
        # 同一ユーザー ID の連携が同時に走った場合の競合を吸収する
        existing_account = await MisskeyAccount.filter(
            user_id=current_user.id,
            instance_url=misskey_account.instance_url,
            misskey_user_id=misskey_account.misskey_user_id,
        ).get_or_none()
        if existing_account is None:
            logging.error(
                f'[MisskeyRouter][MisskeyAuthAPI] Failed to save Misskey account due to an unexpected integrity error. '
                f'[user_id: {current_user.id}]',
                exc_info=ex,
            )
            raise HTTPException(
                status_code = status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail = 'Failed to link Misskey account',
            ) from ex
        existing_account.username = misskey_account.username
        existing_account.name = misskey_account.name
        existing_account.icon_url = misskey_account.icon_url
        existing_account.access_token = misskey_account.access_token
        existing_account.visibility = misskey_account.visibility
        existing_account.channel_id = misskey_account.channel_id
        existing_account.drive_folder_id = misskey_account.drive_folder_id
        await existing_account.save()
        logging.info(
            f'[MisskeyRouter][MisskeyAuthAPI] Updated existing Misskey account after conflict. '
            f'[id: {existing_account.id}, username: {existing_account.username}@{existing_account.instance_url}]',
        )
        return

    logging.info(
        f'[MisskeyRouter][MisskeyAuthAPI] Created new Misskey account. '
        f'[id: {misskey_account.id}, username: {misskey_account.username}@{misskey_account.instance_url}]',
    )


@router.delete(
    '/accounts/{account_id}',
    summary = 'Misskey アカウント連携解除 API',
    status_code = status.HTTP_204_NO_CONTENT,
)
async def MisskeyAccountDeleteAPI(
    misskey_account: Annotated[MisskeyAccount, Depends(GetCurrentMisskeyAccount)],
):
    """
    指定された Misskey アカウントの連携を解除する。<br>
    JWT エンコードされたアクセストークンがリクエストの Authorization: Bearer に設定されていないとアクセスできない。
    """

    await misskey_account.delete()
    logging.info(
        f'[MisskeyRouter][MisskeyAccountDeleteAPI] Deleted Misskey account. '
        f'[id: {misskey_account.id}, username: {misskey_account.username}@{misskey_account.instance_url}]',
    )


@router.post(
    '/accounts/{account_id}/posts',
    summary = 'Misskey ノート投稿 API',
    response_description = 'Misskey ノートの投稿結果。',
    response_model = schemas.PostTweetResult | schemas.TwitterAPIResult,
)
async def MisskeyPostAPI(
    misskey_account: Annotated[MisskeyAccount, Depends(GetCurrentMisskeyAccount)],
    post: Annotated[str, File(description='Misskey ノートの本文。')] = '',
    images: Annotated[list[UploadFile], File(description='Misskey ノートに添付する画像 (4枚まで) 。')] = [],
):
    """
    Misskey にノートを投稿する。投稿本文 or 画像のみ送信することもできる。<br>
    投稿には account_id で指定した Misskey アカウントが利用される。
    """

    return await MisskeyAPI(misskey_account).createNote(post, images)


@router.get(
    '/accounts/{account_id}/timeline',
    summary = 'Misskey ホームタイムライン取得 API',
    response_description = 'Misskey タイムラインのノートリスト。',
    response_model = schemas.TimelineTweetsResult | schemas.TwitterAPIResult,
)
async def MisskeyTimelineAPI(
    misskey_account: Annotated[MisskeyAccount, Depends(GetCurrentMisskeyAccount)],
    cursor_id: Annotated[str | None, Query(description='前回のレスポンスから取得した、次のページを取得するためのカーソル ID (until_id として渡す) 。')] = None,
):
    """
    Misskey のホームタイムラインを取得する。<br>
    ホームタイムラインの取得には account_id で指定した Misskey アカウントが利用される。
    """

    return await MisskeyAPI(misskey_account).homeTimeline(until_id=cursor_id)


@router.get(
    '/accounts/{account_id}/search',
    summary = 'Misskey ノート検索 API',
    response_description = 'Misskey 検索結果のノートリスト。',
    response_model = schemas.TimelineTweetsResult | schemas.TwitterAPIResult,
)
async def MisskeySearchAPI(
    misskey_account: Annotated[MisskeyAccount, Depends(GetCurrentMisskeyAccount)],
    query: Annotated[str, Query(description='検索クエリ。')],
    cursor_id: Annotated[str | None, Query(description='前回のレスポンスから取得した、次のページを取得するためのカーソル ID 。')] = None,
):
    """
    指定されたクエリで Misskey ノートを検索する。<br>
    検索には account_id で指定した Misskey アカウントが利用される。
    """

    return await MisskeyAPI(misskey_account).searchNotes(query=query, until_id=cursor_id)


@router.post(
    '/accounts/{account_id}/notes/{note_id}/renote',
    summary = 'Misskey リノート API',
    response_description = 'リノート結果。',
    response_model = schemas.TwitterAPIResult,
    status_code = status.HTTP_200_OK,
)
async def MisskeyRenoteAPI(
    misskey_account: Annotated[MisskeyAccount, Depends(GetCurrentMisskeyAccount)],
    note_id: Annotated[str, Path(description='リノート対象のノート ID 。')],
):
    """
    指定されたノートをリノートする。<br>
    リノートには account_id で指定した Misskey アカウントが利用される。
    """

    return await MisskeyAPI(misskey_account).renote(note_id)


@router.delete(
    '/accounts/{account_id}/notes/{note_id}/renote',
    summary = 'Misskey リノート取り消し API',
    response_description = 'リノート取り消し結果。',
    response_model = schemas.TwitterAPIResult,
    status_code = status.HTTP_200_OK,
)
async def MisskeyUnrenoteAPI(
    misskey_account: Annotated[MisskeyAccount, Depends(GetCurrentMisskeyAccount)],
    note_id: Annotated[str, Path(description='リノート取り消し対象のノート ID 。')],
):
    """
    指定されたノートのリノートを取り消す。<br>
    リノート取り消しには account_id で指定した Misskey アカウントが利用される。
    """

    return await MisskeyAPI(misskey_account).unrenote(note_id)


@router.post(
    '/accounts/{account_id}/notes/{note_id}/reactions',
    summary = 'Misskey リアクション追加 API',
    response_description = 'リアクション追加結果。',
    response_model = schemas.TwitterAPIResult,
    status_code = status.HTTP_200_OK,
)
async def MisskeyCreateReactionAPI(
    misskey_account: Annotated[MisskeyAccount, Depends(GetCurrentMisskeyAccount)],
    note_id: Annotated[str, Path(description='リアクション対象のノート ID 。')],
    reaction_request: Annotated[schemas.MisskeyReactionRequest, Body(description='リアクション情報。')],
):
    """
    指定されたノートにリアクションを追加する。<br>
    リアクションには account_id で指定した Misskey アカウントが利用される。
    """

    return await MisskeyAPI(misskey_account).createReaction(note_id, reaction_request.reaction)


@router.delete(
    '/accounts/{account_id}/notes/{note_id}/reactions',
    summary = 'Misskey リアクション削除 API',
    response_description = 'リアクション削除結果。',
    response_model = schemas.TwitterAPIResult,
    status_code = status.HTTP_200_OK,
)
async def MisskeyDeleteReactionAPI(
    misskey_account: Annotated[MisskeyAccount, Depends(GetCurrentMisskeyAccount)],
    note_id: Annotated[str, Path(description='リアクション削除対象のノート ID 。')],
):
    """
    指定されたノートのリアクションを削除する。<br>
    リアクション削除には account_id で指定した Misskey アカウントが利用される。
    """

    return await MisskeyAPI(misskey_account).deleteReaction(note_id)


@router.get(
    '/accounts/{account_id}/emojis',
    summary = 'Misskey カスタム絵文字一覧取得 API',
    response_description = 'インスタンスのカスタム絵文字一覧。',
    response_model = schemas.MisskeyEmojisResult,
)
async def MisskeyEmojisAPI(
    misskey_account: Annotated[MisskeyAccount, Depends(GetCurrentMisskeyAccount)],
):
    """
    接続先 Misskey インスタンスのカスタム絵文字一覧を取得する。<br>
    カスタム絵文字の取得には account_id で指定した Misskey アカウントのインスタンスが利用される。
    """

    return await MisskeyAPI(misskey_account).getEmojis()
