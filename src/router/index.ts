import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BookView from '@/views/BookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '書籍一覧',
      component: HomeView,
      meta: { title: 'abceed | 書籍一覧', desc: '' }
    },
    {
      path: '/book/',
      name: '書籍詳細',
      component:  BookView,
      meta: { title: 'abceed | 書籍詳細', desc: '' }
    }
  ]
})

export default router
