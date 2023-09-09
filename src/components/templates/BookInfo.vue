<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useMybookStore } from '@/stores/mybook.ts';
import type { BookResponse } from "@/assets/scripts/api";

const { book } = defineProps<{
  book: BookResponse
}>();

// MyBooksの状態管理
const mybookStore = useMybookStore();
const { isMybook } = storeToRefs(mybookStore);

const addToMybooks = (book: BookResponse) => {
  mybookStore.add(book)
}
const removeFromMyBooks = (bookId: string) => {
  mybookStore.remove(bookId)
}

</script>

<template>
  <div class="c-bookinfo">
    <img class="c-bookinfo__cover" :src="book['img_url']" :alt="book['name_book']" />
    <div class="c-bookinfo__info">
      <h2 class="c-bookinfo__title">{{ book['name_book'] }}</h2>
      <dl class="c-bookinfo__item">
        <dt>著者</dt>
        <dd>{{ book.author }}</dd>
      </dl>
      <dl class="c-bookinfo__item">
        <dt>出版社</dt>
        <dd>{{ book.publisher }}</dd>
      </dl>
      <div class="c-bookinfo__btn-wrapper">
        <!-- MyBook:未追加 -->
        <button
          v-if="!isMybook(book['id_book'])"
          class="c-bookinfo__btn"
          @click="addToMybooks(book)">MyBooks追加</button>
        <!-- MyBook:追加済み -->
        <button
          v-if="isMybook(book['id_book'])"
          class="c-bookinfo__btn --active"
          @click="removeFromMyBooks(book['id_book'])">MyBooks削除</button>
        <!-- 購入: Unlimited 対象外 -->
        <button
          v-if="!book['is_unlimited']"
          class="c-bookinfo__btn">購入する</button>
        <!-- 購入: Unlimited 対象 -->
        <button
          v-if="book['is_unlimited']"
          class="c-bookinfo__btn --active">読み放題中</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-bookinfo {
  background-color: var(--bg-main);
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
  @media screen and (min-width: 768px) {
    max-width: 450px;
  }
  &__cover {
    width: 90px;
    flex-shrink: 0;
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.25));
  }
  &__info {
    padding-left: 15px;
  }
  &__title {
    color: var(--text-main);
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    dt {
      width: 36px;
      flex-shrink: 0;
      padding: 2px 0;
      text-align: center;
      font-size: 10px;
      font-weight: 400;
      color: var(--text-light);
      background-color: var(--bg-light);
      border-radius: 2px;
      margin-right: 6px;
    }
    dd {
      font-size: 12px;
      font-weight: 500;
      padding: 1px 0;
      color: var(--text-light);
    }
  }
  &__btn {
    display: inline-block;
    width: calc((100% - 10px) / 2);
    padding: 6px 0;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: var(--text-red);
    border: 1px solid var(--text-red);
    border-radius: 5px;
    &:first-of-type {
      margin-right: 10px;
    }
    &.--active {
      color: var(--text-reversal);
      background-color: var(--text-red);
    }
  }
}
</style>