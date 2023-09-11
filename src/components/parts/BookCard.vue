<script setup lang="ts">
import type { BookCard } from "@/assets/scripts/types"
const { book } = defineProps<{
  book: BookCard
}>();

</script>

<template>
  <div class="c-bookcard">
    <router-link :to="`/book/?id=${book.id}`">
      <img :src="book.imgUrl" loading="lazy" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.c-bookcard {
  width: 100%;
  max-width: 90px;
  flex-shrink: 0;
  filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.25));
  img { width: 100%;}
  opacity: 1;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 0.7;
  }
}
</style>