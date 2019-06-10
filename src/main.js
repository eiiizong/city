import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '../node_modules/animate.css/animate.css'

axios.defaults.baseURL = 'https://www.yangfugui.com/ordering/api/'
// axios.defaults.timeout = 2000
// axios.defaults.method = 'POST'
axios.defaults.baseURL = 'https://www.yangfugui.com/ordering/api/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Access-Control-Allow-Credentials'] = true
// axios.defaults.headers = {
//   'Accept': 'application/json',
//   'content-type': 'application/x-www-form-urlencoded',
//   'Access-Control-Allow-Origin': '*'
// }

// axios.defaults.deta = {
//   'device-type': 'wechat'
// }
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
