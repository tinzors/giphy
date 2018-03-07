import appRoot from 'app-root-path'
import config from '../../../config.json'
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send(appRoot.path + '../client/dist/index.html')
    })
}
