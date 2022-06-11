/* 配置路由文件 */


/* 
import from 这样的写法
一个是同步引入 从上往下以此执行引入
它是把所有的组件全部引入完成才执行下面代码，webpack打包的时候会把所有的引入组件集体打包，打包成一个大文件
效率比较慢

import函数可以让路由组件单独打包  还支持动态引入
写法很简单，路由组件在注册的时候可以是一个组件也可以是一个函数
写成函数 当路由被访问的时候 对应的函数就会调用，然后对应的import函数才会执行 动态引入并打包成单独文件
*/
// import Home from '@/pages/Home'

const Home = () => import('@/pages/Home')

// import Login from '@/pages/Login'
const Login = () => import ('@/pages/Login')

// import Register from '@/pages/Register'
const Register = () => import ('@/pages/Register')
// import Search from '@/pages/Search'
const Search = () => import('@/pages/Search')
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