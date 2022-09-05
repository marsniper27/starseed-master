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
    path: '/stard',
    name: 'Star Dollars',
    component: () => import('../views/STARD.vue')
  },
  {
    path: '/starqi',
    name: 'StarQi',
    component: () => import('../views/StarQi.vue')
  },
  {
    path: '/fleet',
    name: 'StarSeed Fleet',
    component: () => import('../views/StarSeed Fleet.vue')
  },
  {
    path: '/regen',
    name: 'Regen Protocol',
    //component: () => import('../views/StarSeed Fleet.vue')
  },
  {
    path: '/bridge',
    name: 'Star Bridge',
    component: () => import('../views/StarBridge.vue')
  },
  {
    path: '/info',
    name: 'More Info',
    component: () => import('../views/Info.vue')
  },
  {
    path: '/operator',
    name: 'Operator',
    component: () => import('../views/Operator.vue')
  },
  {
    path: '/starStations',
    name: 'Star Stations',
    component: () => import('../views/StarStations.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
  
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
