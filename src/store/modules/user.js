/* 
    管理登录用户数据vuex的子模块
*/

import { getUserTempId } from "@/utils/userabout"

const state = {
    //获取临时标识Id
    userTempId:getUserTempId()
}

const mutations = {

}

const actions = {

}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}