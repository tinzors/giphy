import db from '../../../db/mongodb'

module.exports = (app) => {
    app.get('/giphy', (req, res) => {
        db.find().then(() => {
            
        })
        res.sendStatus(200)
    })
}
