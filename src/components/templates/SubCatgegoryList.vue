<script setup lang="ts">
import PartsBookCard from "@/components/parts/BookCard.vue"
import type { BookCard, BookDetails } from "@/assets/scripts/api.ts"

const { contents } = defineProps(['contents']);
const name = contents['name_category']
const books: BookCard = contents['book_list']
  .map((book: BookDetails) => ({
    id: book['id_book'],
    imgUrl: book['img_url']
  }));
</script>

<template>
  <div class="c-subcategory">
    <div class="c-subcategory__header">
      <h3>{{ name }}</h3>
    </div>
    <div class="c-subcategory__booklist">
      <PartsBookCard v-for="(book,index) in books" :key="index" :book="book"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-subcategory {
  width: 100%;
  margin-bottom: 30px;
  &__header {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 16px;
      font-weight: 700;
    }
  }
  &__booklist {
    width: 100%;
    padding: 0 15px;
    display: flex;
    overflow: auto;
    & > .c-bookcard {
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>