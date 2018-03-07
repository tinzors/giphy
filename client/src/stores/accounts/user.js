import request from '../../utils/request'

const state = {
    user: null
}

const getters = {
    user(state) {
        return state.user
    }
}

const mutations = {
    SET_USER(state, user) {
        state.giphy = user
    }
}

const actions = {
    SIGN_UP({ commit }, userCtx) {
        let opts = {
            url: "signup",
            method: "post",
            data: userCtx
        }
        return request.callInternal(opts).then(results => {
            localStorage.setItem('x-access-token', results.data['x-access-token'])
            localStorage.setItem('GIPHY_KEY', results.data['GIPHY_KEY'])
            localStorage.setItem('GIPHY_LIMIT', results.data['GIPHY_LIMIT'])
            return Promise.resolve()
        }).catch(err => {
            return Promise.reject(new Error('failed'))
        })
    },
    LOGIN({ commit }, userCtx) {
        let opts = {
            url: "login",
            method: "post",
            data: userCtx
        }
        return request.callInternal(opts).then(results => {
            localStorage.setItem('x-access-token', results.data['x-access-token'])
            localStorage.setItem('GIPHY_KEY', results.data['GIPHY_KEY'])
            localStorage.setItem('GIPHY_LIMIT', results.data['GIPHY_LIMIT'])
            return Promise.resolve()
        }).catch(err => {
            return Promise.reject(new Error('failed'))
        })
    },
}

export default { state, mutations, getters, actions }