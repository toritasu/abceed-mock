<script setup lang="ts">
import { ref } from "vue"
import type { Ref } from "vue"

import TemplatesTopCategoryTab from '@/components/templates/TopCategoryTab.vue'

type Books = Array<Book>

// TOPカテゴリー一覧を取得
// App.vueで実行
const fetchBookApi = async (): Promise<Books> => {
  const endpoint = "https://dev-app-api.abceed.com/mock/book/all"
  const res = await fetch(endpoint)
  const { top_category_list: result } = await res.json()
  return result
}
// TOPカテゴリー別オブジェクト
// ナビのプロパティとTopCategoryTabコンポーネントのpropsとなる
const responseFromApi = await fetchBookApi()
const topCateogyList = responseFromApi.map(category => ({
  id: category['id_top_category'],
  name: category['name_category'],
  subCategories: category['sub_category_list']
}))

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
          <li
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

<style>
.p-home {
  width: 100%;
  overflow: hidden;
}
.p-home__nav__list {
  display: flex;
  overflow: scroll;
}
ul {
  padding: 0;
}
li {
  width: 100px;
  flex-shrink: 0;
  padding: 10px 0;
  list-style-type: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #777;
}
li.--active {
  color: red;
}
.p-home__tab-wrapper {
  display: flex;
}
</style>