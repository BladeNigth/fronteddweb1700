import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'

import HomeView from '../views/HomeView.vue'

import Documento from "@/views/Documento"
import Tipo from "@/views/Tipo"
import Search from "@/views/Search"
import Cart from "@/views/Cart"
import SignUp from "@/views/SignUp";
import LogIn from "@/views/LogIn";
import MyAccount from "@/views/MyAccount";
import Checkout from "@/views/Checkout";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:tipo_slug/:document_slug/',
    name: 'Documento',
    component: Documento
  },
  {
    path: '/:tipo_slug/',
    name: 'Tipo',
    component: Tipo
  },
  {
    path: '/search/',
    name: 'Search',
    component: Search
  },
  {
    path: '/cart/',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/sign-up/',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/my-account/',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/cart/checkout/',
    name: 'Checkout',
    component: Checkout,
    meta: {
        requireLogin: true
    }
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LogIn', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
