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
    add(bookId: string) {
      this.mybooks.push(bookId);
    },
    remove(bookId: string) {
      const index = this.mybooks.indexOf(bookId);
      this.mybooks.splice(index, 1);
    }
  }
})