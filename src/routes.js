import { createRouter, createWebHistory } from 'vue-router'

const config = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/desktop/JayHome.vue')
  },
  {
    path: '/navigate',
    name: 'Navigate',
    component: () => import('./views/desktop/JayNavigate.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('./views/desktop/JayProject.vue')
  }
]
const getRoutes = () => {
  return config.map((route) => ({
    path: route.path,
    name: route.name,
    components: component
  }))
}
// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: getRoutes()
})
export default router
