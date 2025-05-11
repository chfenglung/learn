<script setup>
  import { RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar></NavBar>
  <router-view id="view"></router-view>
</template>

<style lang="scss"></style>
