<template>
    <div class="tab-content tab-content--timeline">
        <div class="timeline-header">
            <Icon icon="fluent:home-16-filled" height="18px" />
            <h2 class="timeline-header__title ml-2">タイムライン</h2>
            <div class="d-flex align-center ml-auto h-100">
                <button v-ripple class="timeline-header__settings" @click="toggleSettings">
                    <Icon icon="fluent:settings-16-filled" width="20" />
                </button>
                <button v-ripple class="timeline-header__refresh" style="color: rgb(var(--v-theme-twitter-lighten-1))" @click="fetchTimelineTweets"
                    v-tooltip.bottom="'タイムラインを更新'">
                    <Icon icon="ic:round-refresh" width="20" :class="isFetching ? 'animate-spin' : ''" />
                </button>
            </div>
        </div>
        <div v-if="showSettings" class="timeline-settings">
            <v-switch
                v-model="showRetweets"
                color="primary"
                hide-details
                density="comfortable"
                label="リツイートを表示する"
            />
        </div>
        <DynamicScroller class="timeline-tweets" :direction="'vertical'" :items="tweets"
            :min-item-size="80" :buffer="400">
            <template v-slot="{item, active}">
                <DynamicScrollerItem
                    :item="item"
                    :active="active"
                    :size-dependencies="[item.text, item.image_urls, item.movie_url]">
                    <Tweet :key="item.id" :tweet="item" />
                </DynamicScrollerItem>
            </template>
        </DynamicScroller>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { ref, onMounted, watch } from 'vue';

import Tweet from '@/components/Watch/Panel/Twitter/Tweet.vue';
import Twitter, { ITweet } from '@/services/Twitter';
import useTwitterStore from '@/stores/TwitterStore';
import useUserStore from '@/stores/UserStore';

const twitterStore = useTwitterStore();
const { selected_twitter_account } = storeToRefs(twitterStore);

const tweets = ref<ITweet[]>([]);
const showSettings = ref(false);
const showRetweets = ref(true);
const isFetching = ref(false);
const nextCursorId = ref<string | undefined>(undefined);

const toggleSettings = () => {
    showSettings.value = !showSettings.value;
};

const fetchTimelineTweets = async () => {
    if (isFetching.value) return;
    isFetching.value = true;
    await useUserStore().fetchUser();
    if (!selected_twitter_account.value) {
        console.warn('selected_twitter_account is null');
        tweets.value = [];
        isFetching.value = false;
        return;
    }

    // タイムラインのツイートを「投稿時刻が新しい順」に取得
    // つまり後ろの要素になるほど古いツイートになる
    const result = await Twitter.getHomeTimeline(selected_twitter_account.value.screen_name, nextCursorId.value);
    if (result && result.tweets) {
        // 「リツイートを表示しない」がチェックされている場合はリツイートのツイートを除外
        if (showRetweets.value === false) {
            result.tweets = result.tweets.filter(tweet => !tweet.retweeted_tweet);
        }
        // 新しいツイートを取得したら tweets の先頭に追加し、tweets.value を更新
        tweets.value = [...result.tweets, ...tweets.value];
        // 次のタイムラインを取得するためのカーソル ID を更新
        nextCursorId.value = result.next_cursor_id;
    }
    isFetching.value = false;
};

// コンポーネントマウント時のみ自動取得
// これ以降は原則ボタンが押された時のみ手動取得となる
onMounted(() => {
    fetchTimelineTweets();
});

// 「リツイートを表示する」のスイッチが変更されたらタイムラインの内容をまっさらにした上で再取得
watch(showRetweets, () => {
    tweets.value = [];
    nextCursorId.value = undefined;
    fetchTimelineTweets();
});

// 選択中の Twitter アカウントが変更されたらタイムラインの内容をまっさらにした上で再取得
// このイベントはコンポーネントのマウント時にも実行される (マウント時に selected_twitter_account が変更されるため)
watch(selected_twitter_account, () => {
    tweets.value = [];
    nextCursorId.value = undefined;
    fetchTimelineTweets();
});

</script>
<style lang="scss" scoped>

.tab-content--timeline {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: visible !important;
}

.timeline-header {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 45px;
    padding: 6px 12px;
    border-top: 1px solid rgba(var(--v-theme-on-surface), 0.12);
    border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);

    &__title {
        font-size: 16px;
        font-weight: bold;
        margin: 0;
    }

    .timeline-header__settings,
    .timeline-header__refresh {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 4px 8px;
        border-radius: 5px;
        background: none;
        border: none;
        cursor: pointer;
        color: rgb(var(--v-theme-text)) !important;
        background-color: rgb(var(--v-theme-background-lighten-2));
        transition: opacity 0.15s ease;
        opacity: 1;

        &:hover {
            opacity: 0.85;
        }
    }

    .timeline-header__refresh {
        margin-left: 6px;
        background-color: rgb(var(--v-theme-twitter));
    }

}

.timeline-settings {
    padding: 0px 12px;
    border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}

.timeline-tweets {
    flex-grow: 1;
    overflow-y: auto;
    will-change: transform;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}

</style>