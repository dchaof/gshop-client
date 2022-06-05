import {reqAddOrUpdateCart,reqCartList} from '@/api'
let state = {
    shopCartList:[]
}
let mutations = {
    RECEIVESHOPCARTLIST(state,shopCartList){
        state.shopCartList = shopCartList
    }
}

let actions = {
    async AddOrUpdateCart ({commit},{skuId,skuNum}){
        //这种的有成功的也有失败的
        let result = await reqAddOrUpdateCart(skuId,skuNum);
        if(result.code === 200){
            return 'ok'
        }else{
            return  Promise.reject(new Error('failed'))
        }


        //只会返回成功的proimise
        /* if(result.code === 200){
            return 'ok'
        }else{
            return 'failed'
        } */
    },
    //获取购物车列表
    async getCartList({commit}){
        const result = await reqCartList();
        if(result.code === 200){
            commit('RECEIVESHOPCARTLIST',result.data)
        }
    }
}

let getters = {
    cartInfoList(state){
        let cartShop = state.shopCartList[0] || {}
        return cartShop.cartInfoList
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}