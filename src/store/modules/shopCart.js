import {reqAddOrUpdateCart,reqCartList,reqUpdateCartChecked,requeryDeleteCart} from '@/api'

let state = {
    shopCartList:[]
}
let mutations = {
    RECEIVESHOPCARTLIST(state,shopCartList){
        state.shopCartList = shopCartList
    }
}

let actions = {
    //删除购物车中选中的商品
    async deleteCartAll({commit,dispatch,getters}){
        let cartInfoList = getters.cartInfoList
        let promises = []
        cartInfoList.forEach(item =>{
            if(!item.isChecked) return 
            let promise = dispatch('deleteCart',item.skuId);
            promises.push(promise)
        })
        return Promise.all(promises)
    }, 
    //删除购物车中的一个商品
    async deleteCart({commit},skuId){
        const result = await requeryDeleteCart(skuId)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    //修改购物车全选是否选中
    async updateCartCheckedAll({commit,dispatch,getters},isChecked){
        let cartInfoList = getters.cartInfoList || []
        let promises = []
        cartInfoList.forEach(item => {
            if(item.isChecked === isChecked) return 
            let promise = dispatch('updateCartChecked',{skuId:item.skuId,isChecked:isChecked})
            promises.push(promise)
        });
        return Promise.all(promises)
    },
    //修改购物车商品是否选中
    async updateCartChecked({commit},{skuId,isChecked}){
        const result = await reqUpdateCartChecked(skuId,isChecked)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    //修改购物车商品数量
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