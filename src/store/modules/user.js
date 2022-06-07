/* 
    管理登录用户数据vuex的子模块
*/

import { getUserTempId,getUserToken,setUserToken,removeUserToken} from "@/utils/userabout"
import { reqUserRegister,reqUserLogin,reqUserInfo,reqUserLogout} from "@/api"

const state = {
    //获取临时标识Id
    userTempId:getUserTempId(),
    token:getUserToken(),//先从localstorge中获取token
    userInfo:{},//用户信息
}

const mutations = {
    RESEIVE_TOKEN(state,token){
        state.token = token
    },
    RESEIVE_USERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    RESET_USERINFO(state){
        state.token = ''
        state.userInfo = ''
    }
}

const actions = {
    //用户注册
    async userRegister({commit},userInfo){
        let result = await reqUserRegister(userInfo)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    //用户登录
    async userLogin({commit},userInfo){
        let result = await reqUserLogin(userInfo)
        if(result.code === 200){
            commit('RESEIVE_TOKEN',result.data.token)
            setUserToken(result.data.token)
            //这里要写返回值 之前存数据没有写return 是因为后续没有其他的不同操作
            //这个需要写，是因为登录不仅要存token数据而且要根据登录成功和失败决定下一步往哪跳
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    //获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        if(result.code === 200){
            commit('RESEIVE_USERINFO',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    //清除用户信息和token
    /* async resetUserInfo({commit}){
        removeUserToken()
        commit('RESET_USERINFO')
    }, */
    
    //退出登录操作
    async userLogout({commit}){
        const result = await reqUserLogout()
        if(result.code === 200){
            removeUserToken()
            commit('RESET_USERINFO')
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