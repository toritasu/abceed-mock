import { defineStore } from "pinia";
import type { BookResponse } from "@/assets/scripts/api.ts";

export type User = {
  id: string,
  name: string,
  email: string,
  password: string,
  mybooks: BookResponse[]
}

export const useMybookStore = defineStore('mybook', {
  state: () => ({
    mybooks: [] as BookResponse[]
  }),
  getters: {
    // MyBookに含まれているか
    isMybook(state) {
      return (bookId: string): boolean => {
        return state.mybooks
          .find((book: BookResponse) => book['id_book'] === bookId)
      }
    }
  },
  actions: {
    // ログイン中ユーザーのMyBook一覧を取得
    async fetch(user: User) {
      // [MyBookリストをフェッチする処理(@param:userState)]
      this.mybooks = [...user.mybooks];
    },
    // 追加
    add(book: BookResponse) {
      this.mybooks.push(book);
      // [MyBookリストに書籍を追加する処理(@param:userState, book{})]
    },
    // 削除
    remove(bookId: string) {
      this.mybooks
        .some((mybook: BookResponse, i: number) => {
          if(mybook['id_book'] === bookId) this.mybooks.splice(i, 1)
        });
      // [MyBookリストから書籍を削除する処理(@param:userState, bookId)]
    }
  }
})