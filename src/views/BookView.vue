<script setup lang="ts">
import { useRoute } from 'vue-router'
import { fetchBookApi } from "@/assets/scripts/api.ts"
import type { TopCategory, SubCategoryResponse, BookResponseResponse } from "@/assets/scripts/api.ts"

// クエリから書籍IDを取得する
const route = useRoute();
const id: string = route.query.id;

// 画面表示に必要な書籍詳細プロパティ
type BookDetails = {
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

// テストタイプ(モック用)
// 本来は、書籍詳細オブジェクトに識別データが含まれていると思われる
// 想定1: [ 'app', 'test' ]
// 想定2: test_types { app: true, test: true, audio: false, sw: false, ... }
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
    <!-- ヘッダー部 -->
    <div class="p-book__header">
      <router-link to="/" class="p-book__header__prev">
        <img class="p-book__header__" src="@/assets/images/chevron-left.svg">
        <span>書籍詳細</span>
      </router-link>
    </div>
    <!-- 書籍情報 -->
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
          <button class="c-bookdetails__btn --active">
            {{ book.isUnlimited ? '読み放題中' : '購入する' }}
          </button>
        </div>
      </div>
    </div>
    <!-- テストタイプ -->
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
.c-bookdetails {
  background-color: var(--bg-main);
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 15px;
  &__cover {
    width: 90px;
    flex-shrink: 0;
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.25));
  }
  &__info {
    padding-left: 15px;
  }
  &__title {
    color: var(--text-main);
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }
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
  &__btn {
    display: inline-block;
    width: calc((100% - 10px) / 2);
    padding: 6px 0;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: var(--text-red);
    border: 1px solid var(--text-red);
    border-radius: 5px;
    &:first-of-type {
      margin-right: 10px;
    }
    &.--active {
      color: var(--text-reversal);
      background-color: var(--text-red);
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
    background-color: var(--bg-main);
    border: 1px solid #ddd;
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
      color: var(--text-main);
      font-size: 10px;
      font-weight: 500;
    }
  }
}
</style>