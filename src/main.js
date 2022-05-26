import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import TypeNav from '@/components/TypeNav'
import './plugins/swiper'
import './mock/mockServer'
Vue.config.productionTip = false
  //创建或指定事件总线对象，保存到Vue的原型上
  // Vue.prototype.$bus = new Vue()
//全局注册组件
Vue.component('TypeNav',TypeNav)
new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
/* --eslint-disable no-unused-vars */
const a = 11