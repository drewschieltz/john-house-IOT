import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueAxios from 'vue-axios'
import router from './router'


createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(router)
.mount('#app')
