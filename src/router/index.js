import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ThermostatsView from '@/views/ThermostatsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/thermostats',
    name: 'Thermostats',
    component: ThermostatsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), routes
})

export default router