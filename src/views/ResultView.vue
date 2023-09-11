<script setup lang="ts">
import { useRoute } from 'vue-router';
import { fetchBookApi } from "@/assets/scripts/api"
import type { TopCategoryResponse, SubCategoryResponse } from "@/assets/scripts/api"
import NavigationHeader from '@/components/common/NavigationHeader.vue';
import TemplatesBookBlockList from '@/components/templates/BookBlockList.vue';

// クエリから書籍IDを取得する
const route = useRoute();
const topCategoryId: string = route.query.top;
const subCategoryId: string = route.query.sub;

const topCateogyList: TopCategoryResponse[] = await fetchBookApi();

const topCategory: TopCategoryResponse | undefined = topCateogyList
  .find(topCategory => topCategory['id_top_category'] === topCategoryId)

const subCategory: SubCategoryResponse | undefined = topCategory['sub_category_list']
  .find(subCategory => subCategory['id_category'] === subCategoryId)

const topCategoryName = topCategory['name_category'];
const subCategoryName = subCategory['name_category']
const books = subCategory['book_list']
</script>

<template>
  <div class="p-result">
    <NavigationHeader>
      {{ topCategoryName }} − {{ subCategoryName }}
    </NavigationHeader>
    <TemplatesBookBlockList v-if="books.length > 0" :books="books" />
  </div>
</template>

<style lang="scss" scoped>
.p-result {
}
</style>