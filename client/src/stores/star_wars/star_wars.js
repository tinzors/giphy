import request from '../../utils/request'

const state = {
    ships: null
}

const getters = {
    ships(state) {
        return state.ships
    }
}

const mutations = {
    SET_SHIPS(state, ships) {
        state.ships = ships
    }
}

const actions = {
    GET_SHIPS({ commit }, ctx) {
        let opts = {
            url: "https://swapi.co/api/starships",
            method: "get",
            data: ""
        }
        return request.callExternal(opts).then(results => {
            commit('SET_SHIPS', results.data.results)
            return Promise.resolve()
        }).catch(err => {
            return Promise.reject(new Error('Failed..'))
        })
    }
}

export default { state, mutations, getters, actions }