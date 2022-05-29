import { reqDetailInfo } from "@/api";

let state = {
    detailInfo:{}
}

let mutations = {
    RECEIVE_DETAILINFO(state,detailInfo){
        state.detailInfo = detailInfo
    }
}

let actions = {
    async getDetailInfo({commit},skuId){
        let result = await reqDetailInfo(skuId)
        if(result.code === 200){
            commit('RECEIVE_DETAILINFO',result.data)
        }
    }
}

let getters = {
    categoryView(state){
        return state.detailInfo.categoryView || {}
    },
    skuInfo(state){
        return state.detailInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.detailInfo.spuSaleAttrList ||[]
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}