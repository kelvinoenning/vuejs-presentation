import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'

import '@/../static/prism.css'
import '@/../static/prism.js'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
