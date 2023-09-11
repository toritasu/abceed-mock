<script setup lang="ts">
import PartsBookBlock from "@/components/parts/BookBlock.vue";
import type { BookResponse } from "@/assets/scripts/api";
const props = defineProps<{
  books: Array[BookResponse]
}>();
</script>

<template>
  <div class="c-bookblock-list">
    <PartsBookBlock v-for="(book,index) in books" :key="index" :book="book"/>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as var;
.c-bookblock-list {
  width: 100%;
  max-width: var.$homeViewWidth;
  padding: 20px 15px 60px;
  margin: 0 auto;
  & > * {
    margin-bottom: 20px;
    &:last-child { margin-bottom: 0; }
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.5s ease-out forwards;
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-delay: calc(0.1s * ($i - 1));
      }
    }
    @keyframes slideUp {
      from { transform: translateY(10px); opacity: 0 }
      to { transform: translateY(0); opacity: 1 }
    }
  }
}
</style>