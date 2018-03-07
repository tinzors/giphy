import login from './login'
import signup from './signup'
import checkLoggedIn from './checkLoggedIn'

module.exports = (app) => {
    login: login(app)
    signup: signup(app)
    checkLoggedIn: checkLoggedIn(app)
}
