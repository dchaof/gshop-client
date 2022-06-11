/* 配置路由文件 */

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import GroupOrder from '@/pages/Center/GroupOrder'
import MyOrder from '@/pages/Center/MyOrder'
import store from '@/store'


export default [
    {
        path:'/pay',
        component:Pay,
        beforeEnter: (to, from, next) => {
            // ...
            if(from.path === '/trade'){
                next()
            }else{
                next('/')
            }
          }
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        beforeEnter: (to, from, next) => {
            // ...
            if(from.path === '/pay'){
                next()
            }else{
                next('/')
            }
          }
    },
    {
        path:'/center',
        component:Center,
        redirect:'/center/myorder',
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            }
        ]
    },
    {
        path:'/trade',
        component:Trade,
        beforeEnter: (to, from, next) => {
            // ...
            if(from.path === '/shopCart'){
                next()
            }else{
                next('/')
            }
          }
    },
    {
        path:'/shopCart',
        component:ShopCart ,
    },
    {
        path:'/addCartSuccess',
        component:AddCartSuccess ,
        beforeEnter: (to, from, next) => {
            // ...
            let skuNum = to.query.skuNum
            let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
            if(skuNum && skuInfo){
                next()
            }else{
                next('/')
            }
        }
    },
    {
        path:'/detail/:skuId',
        component:Detail ,
    },
    {
        path:'/',
        component:Home ,
    },
    
    {
        path:'/login',
        component:Login,
        meta:{
            //是否隐藏底部
            isHideFooter:true
        },
        /* beforeEnter: (to, from,next) => {
            let token = store.state.user.token
            if(token){
                next('/')
            }else{
                next()
            }
        } */
    },
    {
        path:'/register',
        component:Register,
        meta:{
            //是否隐藏底部
            isHideFooter:true
        }
    },
    {
        name:'search',
        //添加  ?  这样这个参数就是可有可无   但是不能传递空串所以要进行trim处理
        path:'/search/:keyword?',
        component:Search,
        //props:true  //值为true时只能传递params参数
        props(route){
            return {keyword3:route.params.keyword,keyword4:route.query.keyword2}
        }
    }   

]