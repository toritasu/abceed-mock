<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id: string = route.query.id

type BookDetails = {
  id: string,
  title: string,
  author: string,
  publisher: string,
  imgUrl: string
}

const findBook = async (id: string): Promise<BookDetails> => {
  const endpoint = "https://dev-app-api.abceed.com/mock/book/all"
  const res = await fetch(endpoint)
  const { top_category_list: result } = await res.json()
  console.log(result)
  const book = result[0].sub_category_list[0].book_list[0]
  return {
    id: book.id_book,
    title: book.name_book,
    author: book.author,
    publisher: book.publisher,
    imgUrl: book.img_url
  }
}
const book: BookDetails = await findBook(id)

console.log(book)

// const testTypes: Array<{
//   name: string, icon: string
// }> = [
//   { name: 'アプリ学習', icon: '' }
// ]

</script>

<template>
  <div class="p-book">
    <div class="c-bookdetails">
      <img class="c-bookdetails__cover" :src="book.imgUrl" :alt="book.title" />
      <div class="c-bookdetails__info">
        <h2 class="c-bookdetails__info__title">{{ book.title }}</h2>
        <dl class="c-bookdetails__info__item">
          <dt>著者</dt>
          <dd>{{ book.author }}</dd>
        </dl>
        <dl class="c-bookdetails__info__item">
          <dt>出版社</dt>
          <dd>{{ book.publisher }}</dd>
        </dl>
      </div>
    </div>
    <div class="c-test-types">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.c-bookdetails {
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
        margin-right: 10px;
      }
      dd {
        font-size: 12px;
        font-weight: 600;
        padding: 1px 0;
        color: #777;
      }
    }
  }
}
</style>