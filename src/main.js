import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import jQuery from 'jquery'
window.$ =window.jQuery = jQuery; 
import 'popper.js'
import 'bootstrap'
import 'fontawesome'
import VueNoty from 'vuejs-noty'

import 'vuejs-noty/dist/vuejs-noty.css'
import Login from './layouts/Login.vue'
import Main from './layouts/Main.vue'

Vue.component('login',Login)
Vue.component('main-layout',Main)

Vue.use(VueNoty)
Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
