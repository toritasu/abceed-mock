<script setup lang="ts">
import TheHeader from '@/components/common/TheHeader.vue';
import { RouterView } from 'vue-router';
import { useMybookStore } from '@/stores/mybook.ts';
import { user } from "@/assets/data/sampleUser.json"; // 仮のユーザーテーブル

// ログイン中ユーザーのMyBookリストをフェッチ
const mybookStore = useMybookStore();
mybookStore.fetch(user);

</script>

<template>
  <TheHeader class="l-header" />
  <Suspense>
    <RouterView v-slot={Component} class="l-main">
      <Transition>
        <KeepAlive include="HomeView">
          <component :is="Component" />
        </KeepAlive>
      </Transition>
    </RouterView>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style lang="scss">
@use "@/assets/styles/variables.scss" as var;
.l-header {
  width: 100vw;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
}
.l-main {
  width: 100%;
  padding-top: var.$headerHeight;
  min-height: 100vh;
  background: var(--bg-light);
}
</style>