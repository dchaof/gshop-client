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