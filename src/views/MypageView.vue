<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMybookStore } from '@/stores/mybook.ts';
import NavigationHeader from '@/components/common/NavigationHeader.vue';
import PartsBookCard from '@/components/parts/BookCard.vue';

const { mybooks } = useMybookStore();
</script>

<template>
  <div class="p-mypage">
    <NavigationHeader>MyBook</NavigationHeader>
    <div class="p-mypage__contents">
      <div v-if="mybooks.length > 0" class="p-mypage__mybooks">
        <PartsBookCard v-for="(book,index) in mybooks" :key="index" :book="book"/>
      </div>
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
  &__mybooks {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    & > .c-bookcard {
      width: calc((100% - (15px * 3)) / 4);
      margin-right: 15px;
      margin-bottom: 15px;
      &:nth-of-type(4n) {
        margin-right: 0;
      }
      &:nth-last-of-type(-n + 4) {
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