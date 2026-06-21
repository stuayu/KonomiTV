
import type { IPostTweetSendResult } from '@/services/Twitter';

import Message from '@/message';
import APIClient from '@/services/APIClient';
import { IPostTweetResult, ITimelineTweetsResult } from '@/services/Twitter';


/** Misskey アカウント連携リクエストを表すインターフェイス */
export interface IMisskeyAuthRequest {
    /** Misskey インスタンスの URL またはホスト名 (例: "misskey.io") */
    instance_url: string;
    /** Misskey の API アクセストークン */
    access_token: string;
    /** ノートのデフォルト公開範囲: public / home / followers / specified */
    visibility: string;
    /** 投稿先のチャンネル ID (省略可) */
    channel_id: string | null;
    /** 画像アップロード先のドライブフォルダ ID (省略可) */
    drive_folder_id: string | null;
}


class Misskey {

    /**
     * Misskey アカウントとアクセストークンで連携する
     * @param misskey_auth_request Misskey のインスタンス URL とアクセストークン
     * @returns 連携できた場合は true, 失敗した場合は false
     */
    static async auth(misskey_auth_request: IMisskeyAuthRequest): Promise<boolean> {

        const response = await APIClient.post('/misskey/auth', misskey_auth_request, {
            timeout: 60 * 1000,
        });

        if (response.type === 'error') {
            APIClient.showGenericError(response, 'Misskey アカウントとの連携に失敗しました。');
            return false;
        }

        return true;
    }


    /**
     * 現在ログイン中のユーザーアカウントに紐づく Misskey アカウントとの連携を解除する
     * @param account_id Misskey アカウントの DB ID
     * @returns 連携解除に成功した場合は true, 失敗した場合は false
     */
    static async logoutAccount(account_id: number): Promise<boolean> {

        const response = await APIClient.delete(`/misskey/accounts/${account_id}`);

        if (response.type === 'error') {
            APIClient.showGenericError(response, 'Misskey アカウントとの連携を解除できませんでした。');
            return false;
        }

        return true;
    }


    /**
     * Misskey にノートを投稿する
     * @param account_id Misskey アカウントの DB ID
     * @param text ノート本文
     * @param captures 添付するキャプチャ画像
     */
    static async sendPost(
        account_id: number,
        text: string,
        captures: Blob[],
    ): Promise<IPostTweetSendResult> {

        // FastAPI 側は multipart/form-data で本文と画像を受け取る
        const form_data = new FormData();
        form_data.append('post', text);
        for (const capture of captures) {
            form_data.append('images', capture);
        }

        // 画像アップロードを含む可能性があるため、3 分タイムアウトで待つ
        const response = await APIClient.post<IPostTweetResult>(`/misskey/accounts/${account_id}/posts`, form_data, {
            timeout: 3 * 60 * 1000,
        });

        if (response.type === 'error') {
            if (Number.isNaN(response.status)) {
                if (typeof response.data.detail === 'string') {
                    return {message: `Misskey へのノート投稿に失敗しました。(${response.data.detail})`, is_error: true, tweet_id: null, post_uri: null, post_cid: null};
                }
                return {message: 'Misskey へのノート投稿に失敗しました。(HTTP リクエストに失敗しました)', is_error: true, tweet_id: null, post_uri: null, post_cid: null};
            }
            if (typeof response.data.detail === 'string') {
                return {message: `Misskey へのノート投稿に失敗しました。(HTTP Error ${response.status} / ${response.data.detail})`, is_error: true, tweet_id: null, post_uri: null, post_cid: null};
            }
            return {message: `Misskey へのノート投稿に失敗しました。(HTTP Error ${response.status})`, is_error: true, tweet_id: null, post_uri: null, post_cid: null};
        }

        return {
            message: response.data.detail,
            is_error: response.data.is_success === false,
            tweet_id: response.data.is_success === false ? null : (response.data.tweet_id ?? null),
            post_uri: null,
            post_cid: null,
        };
    }


    /**
     * Misskey のホームタイムラインを取得する
     * @param account_id Misskey アカウントの DB ID
     * @param cursor_id 前回のレスポンスから取得した cursor (until_id として使われる)
     * @returns タイムラインのノートリスト
     */
    static async getHomeTimeline(account_id: number, cursor_id?: string): Promise<ITimelineTweetsResult | null> {

        const response = await APIClient.get<ITimelineTweetsResult>(`/misskey/accounts/${account_id}/timeline`, {
            params: { cursor_id },
            timeout: 60 * 1000,
        });

        if (response.type === 'error') {
            APIClient.showGenericError(response, 'Misskey のホームタイムラインを取得できませんでした。');
            return null;
        }
        if (response.data.is_success === false) {
            Message.error(response.data.detail);
            return null;
        }
        return response.data;
    }


    /**
     * Misskey のノートを検索する
     * @param account_id Misskey アカウントの DB ID
     * @param query 検索クエリ
     * @param cursor_id 前回のレスポンスから取得した cursor
     * @returns 検索結果のノートリスト
     */
    static async searchNotes(account_id: number, query: string, cursor_id?: string): Promise<ITimelineTweetsResult | null> {

        const response = await APIClient.get<ITimelineTweetsResult>(`/misskey/accounts/${account_id}/search`, {
            params: { query, cursor_id },
            timeout: 60 * 1000,
        });

        if (response.type === 'error') {
            APIClient.showGenericError(response, 'Misskey ノートの検索に失敗しました。');
            return null;
        }
        if (response.data.is_success === false) {
            Message.error(response.data.detail);
            return null;
        }
        return response.data;
    }
}

export default Misskey;
