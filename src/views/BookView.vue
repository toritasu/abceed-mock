<script setup lang="ts">
import { useRoute } from 'vue-router';
import { fetchBookApi } from "@/assets/scripts/api";
import type { TopCategoryResponse, SubCategoryResponse, BookResponse } from "@/assets/scripts/api";
import NavigationHeader from '@/components/common/NavigationHeader.vue';
import TemplatesBookInfo from "@/components/templates/BookInfo.vue";
import TemplatesBookTestTypes from "@/components/templates/BookTestTypes.vue";

// クエリから書籍IDを取得する
const route = useRoute();
const id: string = route.params.id;

// TopCategoryListから一意の書籍リストを作成
const getUniqueBookList = (data: TopCategoryResponse[]) => {
  const array = new Array()
  data.forEach(topCategory => {
    topCategory['sub_category_list']
      .forEach((subCategory: SubCategoryResponse) => {
        array.push(...subCategory.book_list)
      });
  })
  return Array.from(new Set(array))
}
// 一意の書籍リストから目的の書籍を抽出
const findBookById = (uniqueBookList: BookResponse[], id: string) => {
  const book: BookResponse | undefined = uniqueBookList
    .find((book: BookResponse) => book.id_book === id);
  if(!book) throw new Error('お探しの書籍はありません')
  return book
}
// 1.書籍リスト取得APIをフェッチ
const topCateogyList: TopCategoryResponse[] = await fetchBookApi();
// 2.一意の書籍リストを作成
const uniqueBookList: BookResponse[] = getUniqueBookList(topCateogyList);
// 3.目的の書籍を抽出しフォーマット
const book: BookResponse = await findBookById(uniqueBookList, id)
console.log('書籍詳細', book)

</script>

<template>
  <div class="p-book">
    <!-- ヘッダー部 -->
    <NavigationHeader>書籍詳細</NavigationHeader>
    <div class="p-book__contents">
      <!-- 書籍情報 -->
      <TemplatesBookInfo :book="book" class="p-book__contents__info" />
      <!-- テストタイプ -->
      <TemplatesBookTestTypes class="p-book__contents__types"  />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/variables.scss" as var;
.p-book {
  &__contents {
    display: block;
    @media screen and (min-width: var.$bookViewWidth) {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 20px 0;
    }
    &__info {
      max-width: var.$bookInfoWidth;
      @media screen and (min-width: var.$bookInfoWidth) {
        margin: 20px auto 0;
      }
      @media screen and (min-width: var.$bookViewWidth) {
        margin: 0;
      }
    }
    &__types {
      @media screen and (min-width: var.$bookInfoWidth) {
        max-width: var.$testPanelWidth;
        margin: 0 auto;
      }
      @media screen and (min-width: var.$bookViewWidth) {
        margin: 0;
      }
    }
  }
}
</style>