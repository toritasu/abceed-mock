<script setup lang="ts">
import { useMybookStore } from '@/stores/mybook.ts';
import NavigationHeader from '@/components/common/NavigationHeader.vue';
import TemplatesBookBlockList from '@/components/templates/BookBlockList.vue';

const mybookStore = useMybookStore();
const mybooks = mybookStore.mybooks
console.log(mybooks)
</script>

<template>
  <div class="p-mypage">
    <NavigationHeader>MyBook</NavigationHeader>
    <div class="p-mypage__contents">
      <TemplatesBookBlockList v-if="mybooks.length > 0" :books="mybooks" />
      <div v-else class="p-mypage__message">
        お気に入りの書籍をMyBookに登録しよう！
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-mypage {
  &__header {
    width: 100%;
    height: 50px;
    background-color: var(--bg-main);
  }
  &__contents {
    background: var(--bg-light);
  }
  &__message {
    padding: 15px;
    text-align: center;
  }
}
</style>