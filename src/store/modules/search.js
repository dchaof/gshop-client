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
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}