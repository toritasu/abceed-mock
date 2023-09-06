<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/common/TheHeader.vue';
</script>

<template>
  <TheHeader class="l-header" />
  <Suspense>
    <RouterView class="l-main" />
  </Suspense>
</template>

<style>
.l-header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
}
.l-main {
  padding-top: var(--header-height);
}
</style>