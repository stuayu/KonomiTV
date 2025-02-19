<template>
    <header class="header" :class="{ 'search-active': isSearchActive }">
        <template v-if="!isSearchActive">
            <router-link v-ripple class="konomitv-logo" to="/tv/">
                <img class="konomitv-logo__image" src="/assets/images/logo.svg" height="21">
            </router-link>
            <v-spacer></v-spacer>
            <div v-ripple class="search-button" @click="activateSearch">
                <Icon icon="fluent:search-20-filled" height="24px" />
            </div>
        </template>
        <template v-else>
            <div class="search-box">
                <div class="search-box__icon">
                    <Icon icon="fluent:search-20-filled" height="20px" />
                </div>
                <input ref="searchInput" type="search" enterkeyhint="search" :placeholder="searchPlaceholder"
                    v-model="searchQuery" @keydown="handleKeyDown">
                <div v-ripple class="search-box__close" @click="deactivateSearch">
                    <Icon icon="fluent:dismiss-20-filled" height="24px" />
                </div>
            </div>
        </template>
    </header>
</template>
<script lang="ts" setup>

import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// 検索入力フィールドの参照
const searchInput = ref<HTMLInputElement | null>(null);

// 検索窓の表示状態
const isSearchActive = ref(false);

// 検索クエリ
const searchQuery = ref('');

// 検索プレースホルダー
const searchPlaceholder = computed(() => {
    return isVideoSection(route.path)
        ? '録画番組やシリーズを検索...'
        : '放送予定の番組を検索...';
});

// 動画セクションかどうかを判定
const isVideoSection = (path: string) => {
    return path.startsWith('/videos') ||
           path.startsWith('/mylist') ||
           path.startsWith('/watched-history');
};

// 検索パスを取得
const getSearchPath = () => {
    return isVideoSection(route.path)
        ? '/videos/search'
        : '/tv/search';
};

// 検索窓を開く
const activateSearch = () => {
    isSearchActive.value = true;
    // 次のティックで入力フォーカスを設定
    setTimeout(() => {
        searchInput.value?.focus();
    }, 0);
};

// 検索窓を閉じる
const deactivateSearch = () => {
    isSearchActive.value = false;
    searchQuery.value = '';
};

// 検索を実行
const executeSearch = () => {
    if (searchQuery.value.trim()) {
        const searchPath = getSearchPath();
        router.push(`${searchPath}?query=${encodeURIComponent(searchQuery.value.trim())}`);
    }
};

// キーボードイベントの処理
const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        executeSearch();
    } else if (event.key === 'Escape') {
        deactivateSearch();
    }
};

// コンポーネントのマウント時に初期化
onMounted(() => {
    // 検索ページにいる場合は検索状態を初期化
    if (route.path.endsWith('/search') && route.query.query) {
        searchQuery.value = decodeURIComponent(route.query.query as string);
        isSearchActive.value = true;
    }
});

</script>
<style lang="scss" scoped>

.header {
    display: none;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 0px 16px;
    padding-top: 14px;
    height: 48px;
    background: rgb(var(--v-theme-background));
    @include smartphone-vertical {
        display: flex;
    }

    &.search-active {
        padding: 0;
    }

    .konomitv-logo {
        display: block;
        padding: 12px 8px;
        margin-left: -6px;
        border-radius: 8px;
        user-select: none;

        &__image {
            display: block;
        }
    }

    .search-button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-right: -2px;
        padding: 2px;
        border-radius: 8px;
        cursor: pointer;
    }

    .search-box {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 16px;
        padding-top: 14px;

        &__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 8px;
            color: rgb(var(--v-theme-text-darken-1));
        }

        input {
            flex-grow: 1;
            height: 100%;
            border: none;
            background: transparent;
            color: rgb(var(--v-theme-text));
            font-size: 16px;
            // type="search" のデフォルトスタイルを無効化
            -webkit-appearance: none;
            appearance: none;

            &:focus {
                outline: none;
            }

            &::placeholder {
                color: rgb(var(--v-theme-text-darken-2));
            }

            // type="search" のキャンセルボタンを非表示
            &::-webkit-search-cancel-button {
                display: none;
            }
        }

        &__close {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-right: -2px;
            padding: 2px;
            border-radius: 8px;
            cursor: pointer;
        }
    }
}

</style>