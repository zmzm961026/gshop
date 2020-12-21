import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'
import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/msite',
    name: Msite,
    component: () => import(/* webpackChunkName: "about" */ '../views/Msite/Msite.vue'),
    meta: {
      showFooter:true
    }
  },
  {
    path: '/order',
    name: Order,
    component: () => import(/* webpackChunkName: "about" */ '../views/Order/Order.vue'),
    meta: {
      showFooter:true
    }
  },
  {
    path: '/profile',
    name: Profile,
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile/Profile.vue'),
    meta: {
      showFooter:true
    }
  },
  {
    path: '/search',
    name: Search,
    component: () => import(/* webpackChunkName: "about" */ '../views/Search/Search.vue'),
    meta: {
      showFooter:true
    }
  },
  {
    path: '/login',
    name: Login,
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/Login.vue')
  },{
    path: '/',
    redirect:'/msite',
    component: () => import(/* webpackChunkName: "about" */ '../views/Msite/Msite.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
