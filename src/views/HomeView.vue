<script setup lang="ts">
import { ref } from "vue"
import type { Ref } from "vue"
import { fetchBookApi } from "@/assets/scripts/api"
import type { TopCategoryResponse } from "@/assets/scripts/api"
import TemplatesTabNavigation from '@/components/templates/TabNavigation.vue'
import TemplatesTopCategoryTab from '@/components/templates/TopCategoryTab.vue'

// TOPカテゴリー一覧を取得
// App.vueで実行
// ナビのプロパティとTopCategoryTabコンポーネントのpropsとなる
const topCateogyList: TopCategoryResponse[] = await fetchBookApi();
console.log(topCateogyList)

// 選択中のTopカテゴリー
const currentCategoryId: Ref<string> = ref('_top')
const changeCategory = (categoryId: string) => {
  currentCategoryId.value = categoryId
}
</script>

<template>
    <div class="p-home">
      <!-- タブナビゲーション -->
      <TemplatesTabNavigation
        :topCateogyList="topCateogyList"
        :currentCategoryId="currentCategoryId"
        @changeCategory="changeCategory"
      />
      <div class="p-home__tab-wrapper">
        <TemplatesTopCategoryTab 
          v-for="category in topCateogyList"
          :key="`contents_${category.id}`"
          v-show="currentCategoryId === category['id_top_category']"
          :id="category['id_top_category']"
          :name="category['name_category']"
          :subCategories="category['sub_category_list']"
        />
      </div>
    </div>
</template>

<style lang="scss" scoped>
.p-home {
  overflow: hidden;
  &__tab-wrapper {
    display: flex;
  }
}
</style>