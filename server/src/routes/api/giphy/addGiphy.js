import db from '../../../db/mongodb'

module.exports = (app) => {
    app.post('/giphy', (req, res) => {
        db.insertOne().then(() => {

        })
        res.sendStatus(200)
    })
}