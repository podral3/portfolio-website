import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/law-firm',
      name: 'law-firm',
      component: () => import('@/views/LawFirmView.vue'),
    },
    {
      path: '/youtube-analyzer',
      name: 'youtube-analyzer',
      component: () => import('@/views/YoutubeAnalyzerView.vue'),
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
