import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import StoreView from '../views/StoreView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/store',
      name: 'store',
      component: StoreView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: "/login",
      name: "login",
      component: LoginView
    }
  ]
})

export default router
