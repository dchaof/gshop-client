import {reqAddOrUpdateCart} from '@/api'
let state = {

}
let mutations = {

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
    }
}

let getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}