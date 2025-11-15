import { createWebHistory, createRouter } from 'vue-router'
import routes from '@/storages/LsiaaRoutes'

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
