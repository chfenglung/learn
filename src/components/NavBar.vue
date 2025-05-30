<script setup>
  import { ref, onMounted } from 'vue'
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
  const scrollHandler = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > 1) {
      headerShow.value = true
    } else {
      headerShow.value = false
    }
  }
  onMounted(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
  })
</script>
<template>
  <div class="NavBar" :class="{ fx: headerShow }">
    <div class="container">
      <ul>
        <li v-for="(item, idx) in data" :key="idx" :class="{ active: $route.path === item.path }">
          <router-link :to="{ path: item.path }">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
  .NavBar {
    height: 90px;
    margin: 0 auto;
    &.fx {
      background-color: var(--color-background);
      box-shadow: 0 2px 5px rgba($color: #ccc, $alpha: 0.6);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 5;
    }
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
      &:hover,
      &.active {
        color: var(--color-blue);
      }
    }
  }
</style>
