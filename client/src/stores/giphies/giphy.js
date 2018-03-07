import request from '../../utils/request'
import _ from 'lodash'

const state = {
    giphy: null,
    giphies: [],
    searchTerm: null,
    offset: 0,
    isScrolling: false,
    giphyUrlToSend: null
}

const getters = {
    giphy(state) {
        return state.giphy
    },
    giphies(state) {
        return state.giphies
    },
    searchTerm(state) {
        return state.searchTerm
    },
    offset(state) {
        return state.offset
    },
    giphyUrlToSend(state) {
        return state.giphyUrlToSend
    }
}

const mutations = {
    SET_GIPHY(state, giphy) {
        state.giphy = giphy
    },
    SET_GIPHIES(state, setOptions) {
        let { infiniteScrolling, giphies } = setOptions
        if (!infiniteScrolling) {
            state.giphies = []
            state.offset = 0
        }
        if (state.giphies.length > 0) state.offset += 1 
        let returned_giphies = giphies.data
        _.forEach(returned_giphies, (giphy) => {
            state.giphies.push(giphy.images.downsized_medium.url)
        })
    },
    SET_SEARCH_TERM(state, searchTerm) {
        state.searchTerm = searchTerm
    },
    SET_IS_SCROLLING(state, isScrolling) {
        state.isScrolling = isScrolling
    },
    SET_GIPHY_URL_TO_SEND(state, giphyUrlToSend) {
        state.giphyUrlToSend = giphyUrlToSend
    }
}

const actions = {
    GET_GIPHIES({ commit }, searchOpts) {
        let { searchTerm, infiniteScrolling, offset } = searchOpts
        let api_key = localStorage.getItem('GIPHY_KEY')
        let limit = localStorage.getItem('GIPHY_LIMIT')
        let opts = {
            method: 'get',
            url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${api_key}&limit=${limit}&offset=${offset}&rating=g`
        }
        return request.callExternal(opts).then(results => {
            let setOptions = {
                infiniteScrolling,
                giphies: results.data
            }
            commit('SET_GIPHIES', setOptions)
            return Promise.resolve()
        }).catch(err => {
            console.log(err)
            return Promise.reject()
        })
    },
    EMAIL_GIPHY({ commit }, emailOpts) {
        let opts = {
            method: 'post',
            url: 'email',
            data: emailOpts
        }
        return request.callInternal(opts).then(() => {
            return Promise.resolve()
        }).catch(err => {
            return Promise.reject()
        })
    }
}

export default {state, mutations, getters, actions}