const ErrorMiddleware = require("./errorMiddleware");
const AuthMiddleware = require("./authMiddleware");

class Middleware {
  constructor() {
    this.errorMiddleware = new ErrorMiddleware();
    this.authMiddleware = new AuthMiddleware();
  }
}

module.exports = new Middleware();
