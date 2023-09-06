<script setup lang="ts">
import PartsBookCard from "@/components/parts/BookCard.vue"
import type { BookResponse } from "@/assets/scripts/api.ts"

const props = defineProps<{
  id: string,
  name: string,
  books: Array<BookResponse>,
  parentId: string
}>();

// console.log(props)
const subCategoryId = props.id
const topCategoryId = props.parentId
const name = props.name
const books: BookCard = props.books
  .map((book: BookResponse) => ({
    id: book['id_book'],
    imgUrl: book['img_url']
  }));
</script>

<template>
  <div class="c-subcategory">
    <div class="c-subcategory__header">
      <h3>{{ name }}</h3>
      <router-link :to="`/search/?top=${topCategoryId}&sub=${subCategoryId}`">
        <img class="c-nav-header__" src="@/assets/images/chevron-right.svg">
      </router-link>
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
    padding: 0 15px 5px;
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    & > .c-bookcard {
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>