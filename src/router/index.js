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
    },
    {
        path: '/abonner',
        name: 'Abonner',
        component: () => import(/* webpackChunkName: "about" */ '../views/AbonnerPopas.vue')
    },
    {
        path: '/offre-emploi',
        name: 'OffreEmploi',
        component: () => import(/* webpackChunkName: "about" */ '../views/OffreEmploi.vue')
    },
    {
        path: '/job-offer',
        name: 'OffreEmploiEn',
        component: () => import(/* webpackChunkName: "about" */ '../views/OffreEmploiEn.vue')
    },
    {
        path: '/ouverture',
        name: 'Ouverture',
        component: () => import(/* webpackChunkName: "about" */ '../views/OuvertureInfo.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
