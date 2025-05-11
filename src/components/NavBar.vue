<script setup>
  import { ref } from 'vue'
  const data = [
    {
      text: '首頁',
      path: '/'
    },
    {
      text: '部落格',
      path: '/blog'
    }
  ]
  const headerShow = ref(false)
</script>
<template>
  <div class="NavBar" :class="{ fx: headerShow }">
    <div class="container">
      <ul>
        <li v-for="(item, idx) in data" :key="idx">
          <router-link :to="{ path: item.path }">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
  .NavBar {
    background-color: var(-color-background);
    height: 90px;
    max-width: 1920px;
    min-width: 375px;
    margin: 0 auto;
    .container {
      height: 100%;
    }
    ul {
      display: flex;
      height: 100%;
      justify-content: center;
      gap: 40px;
      align-items: center;
    }
    li {
      font-size: 28px;
      font-weight: 700;
      color: var(--color-black);
      &:hover {
        color: var(--color-blue);
      }
    }
  }
</style>
