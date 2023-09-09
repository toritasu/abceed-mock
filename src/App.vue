<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/common/TheHeader.vue';
</script>

<template>
  <TheHeader class="l-header" />
  <Suspense>
    <RouterView v-slot={Component} class="l-main">
      <Transition>
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </Transition>
    </RouterView>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style>
.l-header {
  width: 100vw;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
}
.l-main {
  width: 100vw;
  padding-top: var(--header-height);
  min-height: 100vh;
  background: var(--bg-light);
}
</style>