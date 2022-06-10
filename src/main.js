import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import TypeNav from '@/components/TypeNav'
import MyPagination from '@/components/Pagination'
import './plugins/swiper'
import './plugins/element'
import './mock/mockServer'
import * as API from '@/api'
Vue.config.productionTip = false
  //创建或指定事件总线对象，保存到Vue的原型上
  // Vue.prototype.$bus = new Vue()
//全局注册组件
Vue.component('TypeNav',TypeNav)
Vue.component('MyPagination',MyPagination)
new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
/* --eslint-disable no-unused-vars */
const a = 11