import { defineStore } from "pinia";

export const useMybookStore = defineStore('mybook', {
  state: () => ({
    books: []
  }),
  getters: {
    isMybook(state) {
      return (bookId: string): boolean => {
        return state.books.includes(bookId)
      }
    }
  },
  actions: {
    add(bookId) {
      this.books.push(bookId);
    },
    remove(bookId) {
      const index = this.books.indexOf(bookId);
      this.books.splice(index, 1);
    }
  }
})