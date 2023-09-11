<script setup lang="ts">
import type { TopCategoryResponse } from "@/assets/scripts/api"

const props = defineProps<{
  topCateogyList: TopCategoryResponse,
  currentCategoryId: string
}>();
const emit = defineEmits(['changeCategory'])

const changeCategory = (categoryId: string) => {
  emit('changeCategory', categoryId)
}
</script>

<template>
  <nav class="c-tab-nav">
    <ul class="c-tab-nav__list">
      <li class="c-tab-nav__list__item"
        v-for="category in topCateogyList"
        :key="`nav_${category['id_top_category']}`"
        @click="changeCategory(category['id_top_category'])"
        :class="{ '--active': currentCategoryId === category['id_top_category']}">
        {{ category['name_category'] }}
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.c-tab-nav {
  width: 100vw;
  height: var(--nav-height);
  background: var(--bg-main);
  &__list {
    max-width: var(--max-width);
    height: 100%;
    margin: 0 auto;
    display: flex;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    &__item {
      width: 100px;
      line-height: var(--nav-height);
      flex-shrink: 0;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-light);
      cursor: pointer;
      &.--active {
        color: var(--text-red);
        border-bottom: 2px solid var(--text-red);
      }
    }
  }
}
</style>