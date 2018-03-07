import authentication from '../../../utils/authentication'
import config from '../../../../config.json'

module.exports = (app) => {
    app.post('/api/signup', (req, res) => {
        authentication.signup(req.body).then(results => {
            res.send({
                'x-access-token': results,
                'GIPHY_KEY': config.GIPHY.API_KEY,
                'GIPHY_LIMIT': config.GIPHY.GIPHY_LIMIT
            })
        }).catch(err => {
            res.status(500).send("Something went wrong..")
        }) 
    })
}
