import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/common.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/'
Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
