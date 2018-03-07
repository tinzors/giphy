import axios from 'axios'
import _ from 'lodash'

export default class Request {

    static callInternal(opts) {
        let { method, url, data, params } = opts
        let hostname = window.location.host
        url = `http://${hostname}/api/${url}`
        let headers
        if (localStorage.getItem('x-access-token')) {
            headers = {
                'x-access-token': localStorage.getItem('x-access-token')
            }
        }
        return new Promise((resolve, reject) => {
            axios({
                url,
                method,
                headers,
                data,
                params,
            }).then(response => {
                resolve(response)
            }).catch(err => {
                reject()
            })
        })
    }

    static callExternal(opts) {
        let { method, url, data, params } = opts
        return new Promise((resolve, reject) => {
            axios({
                method,
                url,
                data,
                params,
            }).then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    }
}
