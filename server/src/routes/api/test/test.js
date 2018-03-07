import db from '../../../db/mongodb'

module.exports = (app) => {
    app.get('/test', (req, res) => {
        res.json({
            msg: "May the Force be with you."
        })
    })
}
