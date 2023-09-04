<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/common/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <Suspense>
    <RouterView />
  </Suspense>
</template>
