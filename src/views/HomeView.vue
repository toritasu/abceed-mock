<script setup lang="ts">
import { ref } from "vue"
import type { Ref } from "vue"
import { fetchBookApi } from "@/assets/scripts/api"
import { TopCategory } from "@/assets/scripts/api"
import TemplatesTopCategoryTab from '@/components/templates/TopCategoryTab.vue'

// TOPカテゴリー一覧を取得
// App.vueで実行
// ナビのプロパティとTopCategoryTabコンポーネントのpropsとなる
const topCateogyList: Array<TopCategory> = await fetchBookApi();
console.log(topCateogyList)

// 選択中のTopカテゴリー
const currentCategory: Ref<string> = ref('_top')
const changeCategory = (category: string) => {
  currentCategory.value = category
  console.log(currentCategory.value)
}
</script>

<template>
    <div class="p-home">
      <nav class="p-home__nav">
        <ul class="p-home__nav__list">
          <li class="p-home__nav__list__item"
            v-for="category in topCateogyList"
            :key="`nav_${category.id}`"
            @click="changeCategory(category.id)"
            :class="{ '--active': currentCategory === category.id}">
            {{ category.name }}
          </li>
        </ul>
      </nav>
      <div class="p-home__tab-wrapper">
        <TemplatesTopCategoryTab 
          v-for="category in topCateogyList"
          :key="`contents_${category.id}`"
          v-show="currentCategory === category.id"
          :contents="category.subCategories" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
.p-home {
  width: 100%;
  overflow: hidden;
  &__nav {
    max-width: 960px;
    margin: 0 auto;
    &__list {
      display: flex;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      &__item {
        width: 100px;
        flex-shrink: 0;
        padding: 10px 0;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        color: #777;
        cursor: pointer;
        &.--active {
          color: red;
          border-bottom: 2px solid red;
        }
      }
    }
  }
  &__tab-wrapper {
    display: flex;
  }
}
</style>