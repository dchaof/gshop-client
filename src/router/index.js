import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      // resolve err
      return err
    }
    // rethrow error
    return Promise.reject(err)
  })
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject)
      return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch((err) => {
      if (VueRouter.isNavigationFailure(err)) {
        // resolve err
        return err
      }
      // rethrow error
      return Promise.reject(err)
    })
  }

  /* const originalPush = VueRouter.prototype.push;
  VueRouter.prototype.push = function (location,onResolve,onRject){
      if(onResolve || onRject){
          return originalPush.call(this,location,onResolve,onRject)
        return originalPush.call(this,location).catch((err)=>{
            if(VueRouter.isNavigationFailure(err)){
                return err
            }
            return Promise.reject(err)
        })
      }
  } */




Vue.use(VueRouter)

let router = new VueRouter({
    mode:'history',//模式
    routes,
    scrollBehavior(to,from,savedPosition){
      return {x:0,y:0}
    },
    
})

router.beforeEach(
  async (to, from, next) => {
  //校验token
  let token = store.state.user.token
  if(token){
    if(to.path === '/login'){
      next('/')
    }else{
      let hasUserInfo = !!store.state.user.userInfo.nickName
      if(hasUserInfo){
        next()
      }else{
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          alert('token过期了')
          store.dispatch('resetUserInfo')
          next('/login?redirect='+to.path)
        }
      }
      
    }
  }else{
    next()
  }
})
/* router.beforeEach((to, from, next) => {
  // ...
  next()
}) */

export default router