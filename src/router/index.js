import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterPage from '../components/Register.vue'
import HasilSearch from '../components/HasilSearch.vue'
import IsiCartPage from '../components/IsiCartPage.vue'
import CheckoutPage from '../components/CheckoutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/searchpage',
    name: 'HasilSearch',
    component: HasilSearch
  },
  {
    path: '/cartpage',
    name: 'IsiCartPage',
    component: IsiCartPage
  },
  {
    path: '/checkoutpage',
    name: 'CheckoutPage',
    component: CheckoutPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
