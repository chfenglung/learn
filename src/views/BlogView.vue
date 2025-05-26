<script setup>
  import {} from 'vue'
  import { useHead } from '@vueuse/head'
  import BlogKv from '../components/BlogKv.vue'
  import BlogArticle from '../components/BlogArticle.vue'
  import BlogList from '../components/BlogList.vue'
  import SocialView from '../components/SocialView.vue'
  useHead({
    title: '部落格 - Chung切版作業練習LV3',
    meta: [
      {
        name: 'description',
        content: '部落格，Chung切版作業練習LV3，Flex排版、router應用、分頁功能'
      },
      { property: 'og:title', content: '部落格 - Chung切版作業練習LV3' },
      {
        property: 'og:description',
        content: '部落格，Chung切版作業練習LV3，Flex排版、router應用、分頁功能'
      }
    ],
    link: [{ rel: 'canonical', href: 'https://www.fenglung.url.tw/learn/blog' }]
  })
</script>

<template>
  <main>
    <BlogKv></BlogKv>
    <BlogArticle></BlogArticle>
    <BlogList></BlogList>
    <SocialView></SocialView>
  </main>
</template>

<style lang="scss"></style>
