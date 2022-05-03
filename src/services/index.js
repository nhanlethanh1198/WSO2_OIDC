const AuthService = require('./authService')

class Services {
  constructor () {
    this.authService = new AuthService()
  }
}

module.exports = Services