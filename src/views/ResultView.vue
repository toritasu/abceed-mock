<script setup lang="ts">
import { useRoute } from 'vue-router';
import { fetchBookApi } from "@/assets/scripts/api"
import type { TopCategoryResponse, SubCategoryResponse } from "@/assets/scripts/api"
import NavigationHeader from '@/components/common/NavigationHeader.vue';

// クエリから書籍IDを取得する
const route = useRoute();
const topCategoryId: string = route.query.top;
const subCategoryId: string = route.query.sub;

const topCateogyList: Array<TopCategoryResponse> = await fetchBookApi();

const topCategory: TopCategoryResponse = topCateogyList
  .find(topCategory => topCategory['id_top_category'] === topCategoryId)

const subCategory: SubCategoryResponse = topCategory['sub_category_list']
  .find(subCategory => subCategory['id_category'] === subCategoryId)

const topCategoryName = topCategory['name_category'];
const subCategoryName = subCategory['name_category']
const books = subCategory['book_list']
</script>

<template>
  <div class="p-result">
    <NavigationHeader>
      {{ topCategoryName }} <img src="@/assets/images/chevron-right.svg"> {{ subCategoryName }}
    </NavigationHeader>
    <ul>
      <li v-for="book in books" :key="book['book_id']" class="c-bookblock">
        <img :src="book['img_url']" />
        <div>
          <div class="c-bookblock__title">{{ book['name_book'] }}</div>
          <dl class="c-bookblock__item">
            <dt>著者</dt>
            <dd>{{ book['author'] }}</dd>
          </dl>
          <dl class="c-bookblock__item">
            <dt>出版社</dt>
            <dd>{{ book['publisher'] }}</dd>
          </dl>
          <dl class="c-bookblock__item">
            <dt>出版日</dt>
            <dd>{{ book['create_at'] }}</dd>
          </dl>
        </div>
        
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
  }
  .c-bookblock {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    background-color: var(--bg-main);
    padding: 15px;
    border-radius: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    img {
      width: 90px;
      flex-shrink: 0;
      margin-right: 15px;
    }
    &__title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    // .c-bookinfo__itemと同一
    &__item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 10px;
      dt {
        width: 36px;
        flex-shrink: 0;
        padding: 2px 0;
        text-align: center;
        font-size: 10px;
        font-weight: 400;
        color: var(--text-light);
        background-color: var(--bg-light);
        border-radius: 2px;
        margin-right: 6px;
      }
      dd {
        font-size: 12px;
        font-weight: 600;
        padding: 1px 0;
        color: var(--text-light);
      }
  }
  }
}

</style>