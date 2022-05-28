import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'


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

export default new VueRouter({
    mode:'history',//模式
    routes,
    scrollBehavior(to,from,savedPosition){
      return {x:0,y:0}
    }
})