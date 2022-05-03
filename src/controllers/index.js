const AuthController = require("./authController");

class Controller {
  constructor() {
    this.authController = new AuthController();
  }
}

module.exports = new Controller();
