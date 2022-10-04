import Home from '@/views/Home.vue'
import Thermostats from '@/views/Thermostats.vue'
import AuthCallback from '@/views/AuthCallback.vue'

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/authCB',
      name: 'authCB',
      component: AuthCallback
    },
    {
      path: '/thermostats',
      name: 'thermostats',
      component: Thermostats
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