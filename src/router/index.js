import Vue from 'vue'
import VueRouter from 'vue-router'
import LaFerme from '../views/LaFerme.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'LaFerme',
    component: LaFerme,
    alias: '/apropos'
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/NousJoindre.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
