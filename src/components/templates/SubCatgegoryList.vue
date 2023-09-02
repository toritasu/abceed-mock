<script setup>
import PartsBookCard from '@/components/parts/BookCard.vue'

const { contents } = defineProps(['contents']);
const name = contents['name_category']
const books = contents['book_list']
  .map(book => ({
    id: book['id_book'],
    imgUrl: book['img_url']
  }));
</script>

<template>
  <div>
    <h3>{{ name }}</h3>
    <div class="c-booklist">
      <PartsBookCard v-for="(book,index) in books" :key="index" :book="book"/>
    </div>
  </div>
</template>

<style scoped>
.c-booklist {
  width: 100%;
  display: flex;
}
</style>