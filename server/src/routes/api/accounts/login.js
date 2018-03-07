import authentication from '../../../utils/authentication'
import config from '../../../../config.json'

module.exports = (app) => {
    app.post('/api/login', (req, res) => {
        authentication.login(req.body).then(results => {
            res.send({
                'x-access-token': results,
                'GIPHY_KEY': config.GIPHY.API_KEY,
                'GIPHY_LIMIT': config.GIPHY.GIPHY_LIMIT
            })
        }).catch(err => {
            console.log(err)
            res.status(500).send("Something went wrong..")
        })
    })
}
