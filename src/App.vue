<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h2>abceedコーディング試験</h2>
  </header>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped>
</style>
