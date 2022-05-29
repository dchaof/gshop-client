/* 
包含应用的所有接口的接口请求函数

*/
import mockAjax from './mockAjax'
import ajax from './ajax'

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


//添加购物车
export const reqAddOrUpdateCart = (skuId,skuNum)=>{
    return ajax({
        url:`/cart/addToCart/${skuId }/${skuNum }`,
        method:'post'
    })
}