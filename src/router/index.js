import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'info',
      component: () => import("@/views/Info.vue")
    }
  ]
})

router.beforeEach((to, from) => {
  // 全局路由守卫
})

export default router
