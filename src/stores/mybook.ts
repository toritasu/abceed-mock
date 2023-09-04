import { defineStore } from "pinia";
import type { BookCard } from "@/assets/scripts/types.ts"

export const useMybookStore = defineStore('mybook', {
  state: () => ({
    mybooks: [] as Array<BookCard>
  }),
  getters: {
    isMybook(state) {
      return (bookId: string): boolean => {
        return state.mybooks
          .find((book: BookCard) => book.id === bookId)
      }
    }
  },
  actions: {
    add(bookcard: BookCard) {
      this.mybooks.push(bookcard);
    },
    remove(bookId: string) {
      const index = this.mybooks
        .some((mybook: BookCard, i: number) => {
          if(mybook.id === bookId) this.mybooks.splice(i, 1)
        });
    }
  }
})