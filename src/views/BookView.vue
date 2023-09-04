<script setup lang="ts">
import { useRoute } from 'vue-router'
import { fetchBookApi } from "@/assets/scripts/api.ts"
import type { TopCategory, SubCategoryResponse, BookResponseResponse } from "@/assets/scripts/api.ts"
import TemplatesBookInfo from "@/components/templates/BookInfo.vue"
import TemplatesBookTestTypes from "@/components/templates/BookTestTypes.vue"


// クエリから書籍IDを取得する
const route = useRoute();
const id: string = route.query.id;

// 画面表示に必要な書籍詳細プロパティ
export type BookDetails = {
  id: string,
  title: string,
  author: string,
  publisher: string,
  imgUrl: string,
  isUnlimited: boolean
}

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
const findBookById = (uniqueBookList: Array<Object>, id: string) => {
  const book: BookResponseResponse = uniqueBookList
    .find((book: BookResponseResponse) => book.id_book === id);
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
console.log(book)

</script>

<template>
  <div class="p-book">
    <!-- ヘッダー部 -->
    <div class="p-book__header">
      <router-link to="/" class="p-book__header__prev">
        <img class="p-book__header__" src="@/assets/images/chevron-left.svg">
        <span>書籍詳細</span>
      </router-link>
    </div>
    <!-- 書籍情報 -->
    <TemplatesBookInfo :book="book" />
    <!-- テストタイプ -->
    <TemplatesBookTestTypes />
  </div>
</template>

<style lang="scss">
.p-book {
  background-color: var(--bg-light);
  &__header {
    width: 100%;
    height: 50px;
    padding: 0 15px;
    background-color: var(--bg-main);
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__prev {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
    }
  }
}
</style>