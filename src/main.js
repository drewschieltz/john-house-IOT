import App from '@/App.vue'
import { createApp } from 'vue'

import auth from '@/auth'
import router from '@/router'


createApp(App)
  .use(auth)
  .use(router)
  .mount('#app')