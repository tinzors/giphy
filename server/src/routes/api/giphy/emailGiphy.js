import db from '../../../db/mongodb'

module.exports = (app) => {
    app.post('/giphy/email', (req, res) => {
        res.sendStatus(200)
    })
}
