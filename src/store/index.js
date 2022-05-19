import Vue from 'vue'
import Vuex from 'vuex'
import home from './moudles/home'
import user from './moudles/user'

Vue.use(Vuex)
const mutations = {

}

const actions = {

}

const getters = {
    
}

export default new Vuex.Store({
    modules:{
        home,
        user
    },
    mutations,
    actions,
    getters,
    
})