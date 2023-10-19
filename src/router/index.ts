import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Helpers } from '@/plugins/Helpers'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'products.index' },
  },
  {
    path: '/products',
    name: 'products.index',
    component: Helpers.lazyload('products/TheProductList'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
