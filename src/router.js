import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Thermostats from '@/views/Thermostats.vue'
import AuthCallback from '@/views/AuthCallback.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thermostats',
      name: 'thermostats',
      component: Thermostats
    },
    {
      path: '/authCB',
      name: 'authCB',
      component: AuthCallback
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name == 'authCB' || router.app.$auth.isAuthenticated()) {
    next()
  } else {
    router.app.$auth.login()
  }
})

export default router