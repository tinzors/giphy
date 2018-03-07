import Vue from 'vue'
import Vuex from 'vuex'
import user from './stores/accounts/user'
import giphy from './stores/giphies/giphy'


Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        user,
        giphy
    }
})
