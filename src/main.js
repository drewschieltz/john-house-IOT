import Vue from 'vue'
import App from '@/App.vue'

import auth from '@/auth'
import router from '@/router'

Vue.use(auth)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')