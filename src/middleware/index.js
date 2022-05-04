const ErrorMiddleware = require("./errorMiddleware");
const AuthMiddleware = require("./authMiddleware");
const ValidateMiddleware = require("./validateMiddleware");

class Middleware {
  constructor() {
    this.errorMiddleware = new ErrorMiddleware();
    this.authMiddleware = new AuthMiddleware();
    this.validateMiddleware = new ValidateMiddleware();
  }
}

const middleware = new Middleware();

module.exports = middleware;
