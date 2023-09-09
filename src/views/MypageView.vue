<script setup lang="ts">
import { useMybookStore } from '@/stores/mybook.ts';
import NavigationHeader from '@/components/common/NavigationHeader.vue';
import PartsBookBlock from '@/components/parts/BookBlock.vue';

const mybookStore = useMybookStore();
const mybooks = mybookStore.mybooks
console.log(mybooks)
</script>

<template>
  <div class="p-mypage">
    <NavigationHeader>MyBook</NavigationHeader>
    <div class="p-mypage__contents">
      <ul v-if="mybooks.length > 0" class="p-mypage__mybooks">
        <PartsBookBlock v-for="(book,index) in mybooks" :key="index" :book="book"/>
      </ul>
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
  ul {
    width: 100%;
    max-width: 600px;
    padding: 20px 15px 60px;
    margin: 0 auto;
    li {
      border-radius: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__message {
    padding: 15px;
    text-align: center;
  }
}
</style>