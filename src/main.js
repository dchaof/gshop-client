import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import TypeNav from '@/components/TypeNav'
import 'swiper/css/swiper.css'
Vue.config.productionTip = false

//全局注册组件
Vue.component('TypeNav',TypeNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
/* --eslint-disable no-unused-vars */
const a = 11