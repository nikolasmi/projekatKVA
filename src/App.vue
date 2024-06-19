<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
    <div class="main-wrapper">
      <div class="inner-wrapper">
        <RouterView />
      </div>
    </div>
  <Footer />
</template>

<style scoped>

.main-wrapper {
  display: flex;
  flex-grow: 1;
}
.inner-wrapper {
  width: 100%;
}
</style>

