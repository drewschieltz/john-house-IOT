import axios from 'axios'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import VueAxios from 'vue-axios'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


createApp(App)
    .use(router)
    .use(VueAxios, axios)
.mount('#app')
