<script setup>
  import { RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue'
  import FooterView from './components/FooterView.vue'
</script>

<template>
  <NavBar></NavBar>
  <router-view id="view"></router-view>
  <FooterView></FooterView>
</template>

<style lang="scss"></style>
