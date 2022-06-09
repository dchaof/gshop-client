
import {reqTradeInfo,reqUserAddressList} from '@/api'
let state = {
    tradeInfo:{},
    userAddressList:[]
}

let mutations = {
    RECEIVE_TRADEINFO(state,tradeInfo){
        state.tradeInfo = tradeInfo
    },
    RECEIVE_USERADDRESSLIST(state,userAddressList){
        state.userAddressList = userAddressList
    }
}

let actions = {
    async getTradeInfo({commit}){
        let result = await reqTradeInfo()
        if(result.code === 200){
            commit('RECEIVE_TRADEINFO',result.data)
        }
    },
    async findUserAddressList({commit}){
        let result = await reqUserAddressList()
        if(result.code === 200){
            commit('RECEIVE_USERADDRESSLIST',result.data)
        }
    }
}


let getters = {
    userAddressList(state){
        return state.tradeInfo.userAddressList || []
    },
    detailArrayList(state){
        return state.tradeInfo.detailArrayList || []
    }

}


export default {
    state,
    mutations,
    actions,
    getters
}