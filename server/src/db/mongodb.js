import config from '../../config.json'
import guid from 'guid'
const MongoClient = require('mongodb').MongoClient;
let { connectionString, collections, dbName } = config.mongodb;

const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(connectionString, (err, client) => {
            if (err) reject(err)
            const db = client.db(dbName)
            resolve(db)
        })
    })
}

module.exports = {
    find: (collection_name, query) => {
        return new Promise((resolve, reject) => {
            connect()
                .then(db => {
                    db.collection(collection_name).find(query).toArray((err, results) => {
                        if (err) reject(err)
                        resolve(results)
                    })
                })
        })
        
    },

    findOne: (collection_name, query) => {
        return new Promise((resolve, reject) => {
            connect()
                .then(db => {
                    db.collection(collection_name).findOne(query, (err, result) => {
                        if (err) reject(err)
                        resolve(result)
                    })
                })
        })
    },

    insertOne: (collection_name, params) => {
        return new Promise((resolve, reject) => {
            connect()
                .then(db => {
                    if (!params._id) params._id = guid.create().toString()
                    db.collection(collection_name).insertOne(params, (err, res) => {
                        if (err) reject (err)
                        resolve()
                    })
                })
        })
    },

    updateOne: (collection_name, query, params) => {
        return new Promise((resolve, reject) => {
            connect()
                .then(db => {
                    resolve()
                })
        })
    }
}