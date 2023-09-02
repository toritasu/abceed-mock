<script setup lang="ts">
type BookCard = {
  id: string,
  imgUrl: string
}
const { book } = defineProps<{
  book: BookCard
}>();


</script>

<template>
  <div class="c-bookcard">
    <router-link :to="`/book/?id=${book.id}`">
      <img :src="book.imgUrl" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.c-bookcard {
  width: 90px;
  flex-shrink: 0;
  margin-right: 20px;
  filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.25));
  &:last-child {
    margin-right: 0;
  }
  img { width: 100%;}
}
</style>