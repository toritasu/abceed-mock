<script setup lang="ts">
import { useRoute } from 'vue-router';
import { fetchBookApi } from "@/assets/scripts/api";
import type { TopCategory, SubCategoryResponse, BookResponse } from "@/assets/scripts/api";
import type { BookDetails } from "@/assets/scripts/types";
import NavigationHeader from '@/components/common/NavigationHeader.vue';
import TemplatesBookInfo from "@/components/templates/BookInfo.vue";
import TemplatesBookTestTypes from "@/components/templates/BookTestTypes.vue";

// クエリから書籍IDを取得する
const route = useRoute();
const id: string = route.query.id;

// TopCategoryListから一意の書籍リストを作成
const getUniqueBookList = (data: Array<TopCategory>) => {
  const array = new Array()
  data.forEach(topCategory => {
    topCategory.subCategories
      .forEach((subCategory: SubCategoryResponse) => {
        array.push(...subCategory.book_list)
      });
  })
  return Array.from(new Set(array))
}
// 一意の書籍リストから目的の書籍を抽出
const findBookById = (uniqueBookList: Array<BookResponse>, id: string) => {
  const book: BookResponse = uniqueBookList
    .find((book: BookResponse) => book.id_book === id);
  if(!book) throw new Error('お探しの書籍はありません')
  return {
    id: book.id_book,
    title: book.name_book,
    author: book.author,
    publisher: book.publisher,
    imgUrl: book.img_url,
    isUnlimited: book.is_unlimited === 1 ? true : false
  }
}
// 1.書籍リスト取得APIをフェッチ
const topCateogyList: Array<TopCategory> = await fetchBookApi();
// 2.一意の書籍リストを作成
const uniqueBookList: Array<Object> = getUniqueBookList(topCateogyList);
// 3.目的の書籍を抽出しフォーマット
const book: BookDetails = await findBookById(uniqueBookList, id)
console.log('書籍詳細', book)

</script>

<template>
  <div class="p-book">
    <!-- ヘッダー部 -->
    <NavigationHeader>書籍詳細</NavigationHeader>
    <div class="p-book__contents">
      <!-- 書籍情報 -->
      <TemplatesBookInfo :book="book" />
      <!-- テストタイプ -->
      <TemplatesBookTestTypes />
    </div>
  </div>
</template>

<style lang="scss">
.p-book {
  &__contents {
    display: block;
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 20px 0;
    }
  }
}
</style>