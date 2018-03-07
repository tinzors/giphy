import db from '../../../db/mongodb'

module.exports = (app) => {
    app.get('/giphy/:id', (req, res) => {
        db.findOne().then(() => {
            
        })
        res.sendStatus(200)
    })
}
