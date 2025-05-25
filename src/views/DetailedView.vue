<script setup>
  import { ref, onMounted, watch, computed } from 'vue'
  import { useHead } from '@vueuse/head'
  import { useRoute } from 'vue-router'
  import DetailKv from '../components/DetailKv.vue'
  import DetailArticle from '../components/DetailArticle.vue'
  import SocialView from '../components/SocialView.vue'

  const route = useRoute()
  const articleData = ref(null)
  const loading = ref(true)
  const error = ref(null)
  // 根據 ID 動態載入對應的 JSON 檔案
  const loadArticleData = async id => {
    try {
      loading.value = true
      // 動態 import JSON 檔案
      const response = await import(`../assets/article/${id}.json`)
      articleData.value = response.default
    } catch (err) {
      console.error('載入文章失敗:', err)
      error.value = '文章載入失敗，請稍後再試'
    } finally {
      loading.value = false
    }
  }
  const pageTitle = computed(() => {
    // 檢查 articleData 是否已載入且包含所需的路徑
    if (
      articleData.value &&
      articleData.value.head &&
      articleData.value.head.text &&
      articleData.value.head.text.title
    ) {
      return `${articleData.value.head.text.title}`
    }
    return '文章 - 載入中...'
  })
  const pageContent = computed(() => {
    // 檢查 articleData 是否已載入且包含所需的路徑
    if (
      articleData.value &&
      articleData.value.head &&
      articleData.value.head.text &&
      articleData.value.head.text.content
    ) {
      return `${articleData.value.head.text.content}`
    }
    return '文章 - 載入中...'
  })
  // 同一頁面切換不同文章
  watch(
    () => route.params.id,
    newId => {
      loadArticleData(newId)
    }
  )
  // 監聽路由變化
  onMounted(() => {
    loadArticleData(route.params.id)
  })

  useHead({
    title: pageTitle,
    meta: [
      {
        name: 'description',
        content: pageContent
      },
      { property: 'og:title', content: pageTitle },
      {
        property: 'og:description',
        content: pageContent
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.fenglung.url.tw/learn/detailed/' + `${route.params.id}`
      }
    ]
  })
</script>

<template>
  <main>
    <!-- 載入狀態 -->
    <div v-if="loading" class="loading">載入中...</div>

    <!-- 錯誤狀態 -->
    <div v-else-if="error" class="error">
      {{ error }}<br />
      <router-link to="/blog">回部落格頁</router-link>
    </div>

    <!-- 正常顯示 -->
    <template v-else-if="articleData">
      <DetailKv :data="articleData.head"></DetailKv>
      <DetailArticle :id="route.params.id" :content="articleData.content"></DetailArticle>
    </template>

    <!-- 文章不存在 -->
    <div v-else class="not-found">
      文章不存在<br /><router-link to="/blog">回部落格頁</router-link>
    </div>
    <SocialView></SocialView>
  </main>
</template>

<style lang="scss">
  .loading,
  .error,
  .not-found {
    text-align: center;
    padding: 50px;
    font-size: 18px;
    line-height: 150%;
    a {
      color: var(--color-blue);
      margin-top: 20px;
    }
  }
</style>
