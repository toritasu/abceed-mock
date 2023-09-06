<script setup lang="ts">
import type { BookDetails } from "@/assets/scripts/types";

const props = defineProps<{
  book: BookDetails
}>();

console.log(props.book)
</script>

<template>
  <div class="c-bookblock">
    <router-link :to="`/book/?id=${book['id_book']}`">
      <div class="c-bookblock__inner">
        <img class="c-bookblock__cover" :src="book['img_url']" />
        <div>
          <div class="c-bookblock__title">{{ book['name_book'] }}</div>
          <dl class="c-bookblock__item">
            <dt>著者</dt>
            <dd>{{ book['author'] }}</dd>
          </dl>
          <dl class="c-bookblock__item">
            <dt>出版社</dt>
            <dd>{{ book['publisher'] }}</dd>
          </dl>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.c-bookblock {
  margin-bottom: 20px;
  color: var(--text-main);
  background-color: var(--bg-main);
  padding: 15px;
  border-radius: 6px;
  &__inner {
    display: flex;
    align-items: flex-start;
  }
  &__cover {
    width: 90px;
    flex-shrink: 0;
    margin-right: 15px;
  }
  &__title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  // .c-bookinfo__itemと同一
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
      font-weight: 600;
      padding: 1px 0;
      color: var(--text-light);
    }
  }
}
</style>