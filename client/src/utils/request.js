import axios from 'axios'
import _ from 'lodash'

export default class Request {
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
