import {reqSearch} from '@/api'
const state = {
    productList:{}//搜索出来的商品的数据
}

const mutations = {
    RECEIVE_PRODUCT_LIST(state,productList){
        state.productList = productList
    },
}

const actions = {
    async getProductList({commit},searchParams){ 
        searchParams = {...searchParams}
        Object.keys(searchParams).forEach(key=>{
            if(searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length == 0)){
                delete searchParams[key]
            }
        })
        //发异步ajax请求（调用接口请求函数）
        const result = await reqSearch(searchParams)
        //如果请求成功了,得到数据提交给mutation
        if(result.code === 200){
            const productList = result.data
            commit('RECEIVE_PRODUCT_LIST',productList) 
        }
    },
}

const getters = {
    //获取商品列表
    goodsList(state){
        return state.productList.goodsList || []
    },
    //品牌列表
    trademarkList(state){
        return state.productList.trademarkList || []
    },
    //属性列表
    attrsList(state){
        return state.productList.attrsList || []
    },
    total(state){
        return state.productList.total || 0
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}