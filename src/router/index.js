import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/Home.vue")
    }
  ]
})

router.beforeEach((to, from) => {
  // 全局路由守卫
})

export default router
