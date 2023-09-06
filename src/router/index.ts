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
      name: '書籍一覧',
      component: HomeView,
      meta: { title: 'abceed | 書籍一覧', desc: '' }
    },
    {
      path: '/book/',
      name: '書籍詳細',
      component:  BookView,
      meta: { title: 'abceed | 書籍詳細', desc: '' }
    },
    {
      path: '/mypage/',
      name: 'マイページ',
      component:  MypageView,
      meta: { title: 'abceed | マイページ', desc: '' }
    },
    {
      path: '/search/',
      name: '検索結果',
      component:  ResultView,
      meta: { title: 'abceed | 検索結果', desc: '' }
    }
  ]
})

export default router
