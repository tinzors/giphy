import authentication from '../../../utils/authentication'

module.exports = (app) => {
    app.post('/api/checkLoggedIn', (req, res) => {
        authentication.checkLoggedIn(req).then(results => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.status(500).send("Something went wrong..")
        })
    })
}
