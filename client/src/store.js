import Vue from 'vue'
import Vuex from 'vuex'
import user from './stores/accounts/user'
import starWars from './stores/star_wars/star_wars'


Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        user,
        starWars
    }
})
