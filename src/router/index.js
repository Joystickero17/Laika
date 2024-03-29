import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import StoreView from '../views/StoreView.vue'
import NotFound from '../components/NotFound.vue'
import AdminView from '../views/AdminView.vue'
import ProductsList from '../views/ProductsList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/store/:id?',
      name: 'store_home',
      component: StoreView,
      children:[
        {
          path:"",
          name:"store_products",
          component: ProductsList
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin_home',
      component: AdminView
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
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound 
    }
  ]
})

export default router
