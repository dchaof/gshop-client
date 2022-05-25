/* 
管理首页相关数据的vuex子模块
*/
import {reqCategoryList,
        reqBannerList,
        reqRecommends,
        reqFloors
    } from '@/api'
const state = { 
    categoryList:[],
    bannerList:[],
    recommends:[],
    floors:[],
}

const mutations = {
    //接收保存分类列表
    RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList.splice(0,15)
    },
    //接收动态轮播数据
    RECEIVE_BANNER_LIST(state,bannerList){
        state.bannerList = bannerList
    },
    RECEIVE_RECOMMENDS(state,recommends){
        state.recommends = recommends
    },
    RECEIVE_FLOORS(state,floors){
        state.floors = floors
    },
    
}


const actions = {

/* 
获取三级分类列表的异步action
*/
async getCategoryList({commit}){ 
    //发异步ajax请求（调用接口请求函数）
    const result = await reqCategoryList()
    //如果请求成功了,得到数据提交给mutation
    if(result.code === 200){
        const categoryList = result.data
        commit('RECEIVE_CATEGORY_LIST',categoryList) 
    }
},

/* 
获取轮播图
*/
async getBannerList({commit}){ 
    //发异步ajax请求（调用接口请求函数）
    const result = await reqBannerList()
    //如果请求成功了,得到数据提交给mutation
    if(result.code === 200){
        const bannerList = result.data
        commit('RECEIVE_BANNER_LIST',bannerList) 
    }
},

async getRecommends({commit}){ 
    //发异步ajax请求（调用接口请求函数）
    const result = await reqRecommends()
    //如果请求成功了,得到数据提交给mutation
    if(result.code === 200){
        const recommends = result.data
        commit('RECEIVE_RECOMMENDS',recommends) 
    }
},
async getFloors({commit}){ 
    //发异步ajax请求（调用接口请求函数）
    const result = await reqFloors()
    //如果请求成功了,得到数据提交给mutation
    if(result.code === 200){
        const floors = result.data
        commit('RECEIVE_FLOORS',floors) 
    }
},


}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}