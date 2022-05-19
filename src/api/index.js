/* 
包含应用的所有接口的接口请求函数

*/
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