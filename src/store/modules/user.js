/* 
    管理登录用户数据vuex的子模块
*/

import { getUserTempId } from "@/utils/userabout"
import { reqUserRegister } from "@/api"

const state = {
    //获取临时标识Id
    userTempId:getUserTempId()
}

const mutations = {

}

const actions = {
    async userRegister({commit},userInfo){
        let result = await reqUserRegister(userInfo)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}