<script setup lang="ts">
import { useRoute } from 'vue-router'
import { fetchBookApi } from "@/assets/scripts/api.ts"
import type { TopCategory } from "@/assets/scripts/api.ts"

const route = useRoute()
const id: string = route.query.id

type BookDetails = {
  id: string,
  title: string,
  author: string,
  publisher: string,
  imgUrl: string
}

// TopCategoryListから一意の書籍リストを作成
const getUniqueBookList = (data: Array<TopCategory>) => {
  const array = new Array()
  data.forEach(topCategory => {
    topCategory.subCategories.forEach(subCategory => {
      array.push(...subCategory.book_list)
    })
  })
  return Array.from(new Set(array))
}

// 一意の書籍リストから目的の書籍を抽出
const findBookById = (uniqueBookList: Array<Object>, id: string) => {
  const book = uniqueBookList.find(book => book.id_book === id)
  return {
    id: book.id_book,
    title: book.name_book,
    author: book.author,
    publisher: book.publisher,
    imgUrl: book.img_url
  }
}

const topCateogyList: Array<TopCategory> = await fetchBookApi();
const uniqueBookList: Array<Object> = getUniqueBookList(topCateogyList);
const book: BookDetails = await findBookById(uniqueBookList, id)

// テストタイプ
// 本来は書籍詳細オブジェクトに識別データ（配列またはboolean）が含まれていると思われる
const testTypes: Array<{
  label: string, icon: string
}> = [
  { label: 'アプリ学習', icon: 'icon_study_quiz.svg' },
  { label: 'テスト', icon: 'icon_study_test.svg' },
  { label: '音声(無料)', icon: 'icon_study_sound.svg' },
  { label: 'SWトレ', icon: 'icon_study_sw.svg' },
  { label: '単語一覧', icon: 'icon_study_vocab.svg' },
  { label: 'マークシート', icon: 'icon_study_marksheet.svg' },
  { label: '学習記録', icon: 'icon_study_record.svg' }

]

</script>

<template>
  <div class="p-book">
    <div class="c-bookdetails">
      <img class="c-bookdetails__cover" :src="book.imgUrl" :alt="book.title" />
      <div class="c-bookdetails__info">
        <h2 class="c-bookdetails__title">{{ book.title }}</h2>
        <dl class="c-bookdetails__item">
          <dt>著者</dt>
          <dd>{{ book.author }}</dd>
        </dl>
        <dl class="c-bookdetails__item">
          <dt>出版社</dt>
          <dd>{{ book.publisher }}</dd>
        </dl>
        <div class="c-bookdetails__btn-wrapper">
          <button class="c-bookdetails__btn">MyBooks追加</button>
          <button class="c-bookdetails__btn --active">読み放題中</button>
        </div>
      </div>
    </div>
    <ul class="c-test-types">
      <li class="c-test-types__item" v-for="testType in testTypes" :key="testType">
        <div class="c-test-types__item__inner">
          <picture>
            <source media="(prefers-color-scheme: dark)" :srcset="`/images/icons/dark/${testType.icon}`">
            <img :src="`/images/icons/light/${testType.icon}`" alt="" class="c-test-types__item__icon">
          </picture>
          <div class="c-test-types__item__label">{{ testType.label }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.p-book {
  background-color: #f5f5f5;
}
.c-bookdetails {
  background-color: #fff;
  display: flex;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 15px;
  &__cover {
    width: 90px;
    flex-shrink: 0;
  }
  &__info {
    padding-left: 15px;
  }
  &__title {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  &__item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    dt {
      font-size: 10px;
      font-weight: 400;
      height: 1.6em;
      padding: 2px 6px;
      color: #777;
      background-color: #eee;
      border-radius: 2px;
      margin-right: 6px;
    }
    dd {
      font-size: 12px;
      font-weight: 600;
      padding: 1px 0;
      color: #777;
    }
  }
  &__btn {
    display: inline-block;
    width: calc((100% - 10px) / 2);
    height: 20px;
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    color: red;
    border: 1px solid red;
    border-radius: 5px;
    &:first-of-type {
      margin-right: 10px;
    }
    &.--active {
      color: #fff;
      background-color: red;
    }
  }
}
.c-test-types {
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  &__item {
    width: 70px;
    aspect-ratio: 1 / 1;
    flex-shrink: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 20px;
    /* ボタンの中身を中央合わせ */
    display: flex;
    align-items: center;
    justify-content: center;
    &__inner {
      text-align: center;
    }
    &:nth-of-type(4n) {
      margin-right: 0;
    }
    &:nth-last-of-type(-n + 4) {
      margin-bottom: 0;
    }
    &__icon {
      width: 40px;
      height: 40px;
      margin-bottom: 5px;
    }
    &__label {
      font-size: 10px;
    }
  }
}
</style>