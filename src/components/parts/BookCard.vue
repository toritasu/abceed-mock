<script setup lang="ts">
type Book = {
  id: string,
  imgUrl: string
}
const { book } = defineProps<{
  book: Book
}>();


</script>

<template>
  <div class="c-bookcard">
    <router-link :to="`/book/?id=${book.id}`">
      <img :src="book.imgUrl" />
    </router-link>
  </div>
</template>

<style scoped>
.c-bookcard {
  width: 90px;
  flex-shrink: 0;
  margin-right: 20px;
  filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.25));
}
img { width: 100%;}
</style>