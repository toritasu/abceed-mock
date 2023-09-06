<script setup lang="ts">
import { useRoute } from 'vue-router';
import { fetchBookApi } from "@/assets/scripts/api"
import type { TopCategoryResponse, SubCategoryResponse } from "@/assets/scripts/api"
import NavigationHeader from '@/components/common/NavigationHeader.vue';
import PartsBookBlock from '@/components/parts/BookBlock.vue';

// クエリから書籍IDを取得する
const route = useRoute();
const topCategoryId: string = route.query.top;
const subCategoryId: string = route.query.sub;

const topCateogyList: Array<TopCategoryResponse> = await fetchBookApi();

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
    <ul>
      <li v-for="book in books" :key="book['book_id']">
        <PartsBookBlock :book="book" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.p-result {
  ul {
    width: 100%;
    max-width: 480px;
    padding: 20px 15px 60px;
    margin: 0 auto;
    li {
      border-radius: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

</style>