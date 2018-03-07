import main from './main/main'
import accounts from './api/accounts'
import giphy from './api/giphy'
import email from './api/email'
import test from './api/test/'

module.exports = (app) => {
    main(app),
    test(app),
    accounts(app),
    email(app)
}
