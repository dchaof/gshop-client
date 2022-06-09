/* 
包含应用的所有接口的接口请求函数

*/
import mockAjax from './mockAjax'
import ajax from './ajax'
import { method } from 'lodash'

/* 
首页三级分类
/product/getBaseCategoryList
请求方式
*/

export function reqCategoryList(){
    // return ajax.get('/product/getBaseCategoryList')
    // return ajax('/product/getBaseCategoryList')
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

/* 动态轮播图
api/cms/banner   get
*/
export const reqBannerList = () => ajax('/cms/banner')


//mock请求
export const reqRecommends = () => mockAjax('/recommends')
export const reqFloors = () => mockAjax('/floors')

/* reqFloors().then(result => {
    console.log(result.data)
}) */

export const reqSearch = (searchParams) => ajax.post('/list',searchParams)

//获取商品详细信息
export const reqDetailInfo = (skuId) => {
    return ajax({
        url:`/item/${skuId}`,
        method:'get'
    })
}


//添加购物车,修改购物车数据库
export const reqAddOrUpdateCart = (skuId,skuNum)=>{
    return ajax({
        url:`/cart/addToCart/${skuId }/${skuNum }`,
        method:'post'
    })
}


//获取购物车列表
///cart/cartList
export const reqCartList = () => {
    return ajax({
        url:'/cart/cartList',
        method:'get'
    })
}


//修改单个购物车是否选中
// /api/cart/checkCart/{skuID}/{isChecked}
// get
export const reqUpdateCartChecked = (skuId,isChecked) =>{
    return ajax({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:'get'
    })
}


//删除购物车中的一个商品
///api/cart/deleteCart/{skuId}
//delete
export const requeryDeleteCart = (skuId) => {
    return ajax({
        url:`/cart/deleteCart/${skuId}`,
        method:'delete'
    })
}

//注册用户信息
///api/user/passport/register
//post
export const reqUserRegister = (userInfo)=>{
    return ajax({
        url:'/user/passport/register',
        method:'post',
        data:userInfo
    })
}


//用户登录
//  /api/user/passport/login
//post
export const reqUserLogin = (userInfo) => {
    return ajax({
        url:'/user/passport/login',
        method:"post",
        data:userInfo
    })
}



//根据token获取用户信息
//http://182.92.128.115/api/user/passport/auth/getUserInfo
//get

export const reqUserInfo = () => {
    return ajax({
        url:'/user/passport/auth/getUserInfo',
        method:'get'
    })
}

//退出登录
// /api/user/passport/logout
// get
export const reqUserLogout = ()=>{
    return ajax({
        url:'/user/passport/logout',
        method:'get'
    })
}

//获取订单交易页信息
// /api/order/auth/trade
//get
export const reqTradeInfo = ()=>{
    return ajax({
        url:'/order/auth/trade',
        method:'get'
    })
}

//获取收货地址
//http://localhost:8081/api/user/userAddress/auth/findUserAddressList
//get
export const reqUserAddressList = ()=>{
    return ajax({
        url:'/user/userAddress/auth/findUserAddressList',
        method:'get'
    })
}

//提交订单
//  /api/order/auth/submitOrder?tradeNo={tradeNo}
// post
export const reqSubmitOrder = (tradeNo,tradeData)=>{
    return ajax({
        url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method:'post',
        data:tradeData
    })
}