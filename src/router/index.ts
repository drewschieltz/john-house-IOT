import { App } from 'vue';

import Home from "../views/Home.vue";
import Thermostats from "../views/Thermostats.vue";

import { createAuthGuard } from "@auth0/auth0-vue";
import { createRouter as createVueRouter, createWebHashHistory, Router } from "vue-router";


export function createRouter(app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/thermostats",
        name: "Thermostats",
        component: Thermostats,
        beforeEnter: createAuthGuard(app)
      }
    ],
    history: createWebHashHistory()
  })
}