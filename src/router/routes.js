/* 配置路由文件 */

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'

export default [
    {
        path:'/trade',
        component:Trade
    },
    {
        path:'/shopCart',
        component:ShopCart ,
    },
    {
        path:'/addCartSuccess',
        component:AddCartSuccess ,
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
        }
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