<script setup lang="ts">
import PartsBookCard from "@/components/parts/BookCard.vue"
import type { BookResponse, BookCard } from "@/assets/scripts/api.ts"

const props = defineProps<{
  id: string,
  name: string,
  books: BookResponse[],
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
      <router-link v-if="books.length > 6" :to="`/search/?top=${topCategoryId}&sub=${subCategoryId}`">
        <img class="c-nav-header__" src="@/assets/images/chevron-right.svg">
      </router-link>
    </div>
    <div class="c-subcategory__booklist">
      <PartsBookCard v-for="(book,index) in books" :key="index" :book="book"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as var;
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
    @media screen and (min-width: calc(var.$homeViewWidth + 15px)) {
      overflow-x: hidden;
    }
    & > * {
      margin-right: 15px;
      &:last-child { margin-right: 0; }
      opacity: 0;
      transform: translateX(20px);
      animation: slideUp 0.5s ease-out forwards;
      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          animation-delay: calc(0.1s * ($i - 1));
        }
      }
      @keyframes slideUp {
        from { transform: translateX(20px); opacity: 0 }
        to { transform: translateY(0); opacity: 1 }
      }
    }
  }
}
</style>