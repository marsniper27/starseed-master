import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/farm',
    name: 'Farm',
    component: () => import('../views/Farm.vue')
  },
  {
    path: '/pool',
    name: 'Pool',
    component: () => import('../views/Pool.vue')
  },
  {
    path: '/bridge',
    name: 'Bridge',
    component: () => import('../views/Bridge.vue')
  },
  {
    path: '/operator',
    name: 'Operator',
    component: () => import('../views/Operator.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
