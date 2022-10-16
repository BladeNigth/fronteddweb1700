import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Documento from "@/views/Documento";
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

export default router
