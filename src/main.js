import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'
import App from './App.vue'
import router from './router'

import VueAxios from 'vue-axios'
import packageInfo from '../auth_config.json';

import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue';


createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(
        createAuth0({
          domain: packageInfo.domain,
          client_id: packageInfo.clientId,
          redirect_uri: window.location.origin,
        })
    )
.mount('#app')