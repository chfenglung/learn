<script setup>
  import {} from 'vue'
  import { useHead } from '@vueuse/head'
  import IdxKv from '../components/IdxKv.vue'
  import IdxPlan from '../components/IdxPlan.vue'
  import IdxChosen from '../components/IdxChosen.vue'
  import IdxCase from '../components/IdxCase.vue'
  import IdxNews from '../components/IdxNews.vue'
  import IdxContact from '../components/IdxContact.vue'
  useHead({
    title: '首頁 - Chung切版作業練習LV2',
    meta: [
      {
        name: 'description',
        content: '首頁，Chung切版作業練習LV2，包涵Flex排版、輪播、router應用'
      },
      { property: 'og:title', content: '首頁 - Chung切版作業練習LV2' },
      {
        property: 'og:description',
        content: '首頁，Chung切版作業練習LV2，包涵Flex排版、輪播、router應用'
      }
    ],
    link: [{ rel: 'canonical', href: 'https://www.fenglung.url.tw/learn/' }]
  })
</script>

<template>
  <main>
    <IdxKv></IdxKv>
    <IdxPlan></IdxPlan>
    <IdxChosen></IdxChosen>
    <IdxCase></IdxCase>
    <IdxNews></IdxNews>
    <IdxContact></IdxContact>
  </main>
</template>

<style lang="scss"></style>
