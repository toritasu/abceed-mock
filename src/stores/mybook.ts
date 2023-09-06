import { defineStore } from "pinia";
import type { BookResponse } from "@/assets/scripts/api.ts"

export const useMybookStore = defineStore('mybook', {
  state: () => ({
    mybooks: [] as Array<BookResponse>
  }),
  getters: {
    isMybook(state) {
      return (bookId: string): boolean => {
        return state.mybooks
          .find((book: BookResponse) => book['id_book'] === bookId)
      }
    }
  },
  actions: {
    add(book: BookResponse) {
      this.mybooks.push(book);
    },
    remove(bookId: string) {
      const index = this.mybooks
        .some((mybook: BookResponse, i: number) => {
          if(mybook.id === bookId) this.mybooks.splice(i, 1)
        });
    }
  }
})