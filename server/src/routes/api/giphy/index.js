import addGiphy from './addGiphy'
import emailGiphy from './emailGiphy'
import getGitphy from './getGiphy'
import getGiphies from './getGiphies'

module.exports = (app) => {
    addGiphy: addGiphy(app)
    getGitphy: getGitphy(app)
    getGiphies: getGiphies(app)
    emailGiphy: emailGiphy(app)
}
