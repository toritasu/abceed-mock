import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BookView from '@/views/BookView.vue'
import MypageView from '@/views/MypageView.vue'
import ResultView from '@/views/ResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'abceed | 書籍一覧', desc: '' }
    },
    {
      path: '/book/:id',
      name: 'book',
      component:  BookView,
      meta: { title: 'abceed | 書籍詳細', desc: '' }
    },
    {
      path: '/mypage/',
      name: 'mypage',
      component:  MypageView,
      meta: { title: 'abceed | マイページ', desc: '' }
    },
    {
      path: '/search/',
      name: 'search',
      component:  ResultView,
      meta: { title: 'abceed | 検索結果', desc: '' }
    }
  ]
})

export default router
