import db from '../db/mongodb'
import boom from 'boom'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import config from '../../config.json'
import guid from 'guid'
import _ from 'lodash'

let {
    KEY,
    EXPIRATION
} = config.JWT_KEY

module.exports = {
    checkLoggedIn: (req) => {
        return new Promise((resolve, reject) => {
            let token = _.get(req, "headers['x-access-token']")
            jwt.verify(token, KEY, (err) => {
                if (err) reject()
                resolve()
            }).catch(err => {
                reject()
            })
        })
    },
    signup: (credentials) => {
        return new Promise((resolve, reject) => {
            let {
                firstName,
                lastName,
                email,
                password
            } = credentials
            db.findOne("Users", {
                    email
                })
                .then(user => {
                    if (user) reject(boom.forbidden('User already has an account'))
                    let pass_salt = crypto.randomBytes(64).toString('hex')
                    let pass_hash = (crypto.pbkdf2Sync(password, pass_salt, 10000, 128, 'sha512')).toString('hex')
                    let userCtx = {
                        lastName,
                        firstName,
                        email,
                        pass_salt,
                        pass_hash
                    }
                    let token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: userCtx
                    }, KEY)
                    userCtx.token = token
                    return {
                        firstName,
                        lastName,
                        email,
                        pass_salt,
                        pass_hash,
                        token
                    }
                }).then(userCtx => {
                    let {
                        firstName,
                        lastName,
                        email,
                        pass_salt,
                        pass_hash,
                        token
                    } = userCtx
                    db.insertOne("Users", {
                        firstName,
                        lastName,
                        email,
                        pass_salt,
                        pass_hash,
                        token
                    }).then(results => {
                        resolve(userCtx.token)
                    }).catch(err => {
                        reject(err)
                    })
                })
        })
    },
    login: (credentials) => {
        return new Promise((resolve, reject) => {
            let {
                email,
                password
            } = credentials
            db.findOne("Users", {
                email
            }).then(user => {
                if (!user) reject(boom.forbidden('User does not have an account'))
                let pass_salt = user.pass_salt
                let pass_hash = user.pass_hash
                let encryptedPassword = (crypto.pbkdf2Sync(password, pass_salt, 10000, 128, 'sha512')).toString('hex')
                if (encryptedPassword === pass_hash) {
                    let token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: email
                    }, KEY);
                    resolve(token)
                } else {
                    reject()
                }
            })
        })
    }
}