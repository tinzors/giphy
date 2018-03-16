import main from './main/main'
import accounts from './api/accounts'
import test from './api/test/'

module.exports = (app) => {
    main(app),
    test(app),
    accounts(app)
}
