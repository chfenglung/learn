import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useArticleStore = defineStore('articles', () => {
  const articleList = ref([])
  const nowPage = ref(1)
  const itemsPerPage = 12
  const isLoading = ref(false)

  // 計算屬性
  const pageNum = computed(() => Math.ceil(articleList.value.length / itemsPerPage))
  const paginatedData = computed(() => {
    const start = (nowPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return articleList.value.slice(start, end)
  })

  // 獲取文章列表
  const fetchArticles = async () => {
    try {
      isLoading.value = true
      // 替換為實際的 API 請求或 JSON 導入
      const response = await import('@/assets/articleList.json')
      articleList.value = response.data
    } catch (error) {
      console.error('載入文章列表失敗:', error)
    } finally {
      isLoading.value = false
    }
  }

  // 變更頁面
  const changePage = page => {
    nowPage.value = page
  }

  // 獲取相鄰文章 (上、下篇文章)
  const getAdjacentArticles = currentId => {
    const index = articleList.value.findIndex(article => article.id === currentId)
    return {
      prev: index > 0 ? articleList.value[index - 1] : null,
      next: index < articleList.value.length - 1 ? articleList.value[index + 1] : null
    }
  }

  return {
    articleList,
    nowPage,
    itemsPerPage,
    isLoading,
    pageNum,
    paginatedData,
    fetchArticles,
    changePage,
    getAdjacentArticles
  }
})
