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
import '@/plugins/validate'



import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/loading.gif'
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
  loading,  // 指定未加载得到图片之前的loading图片
})



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