const ErrorMiddleware = require("./errorMiddleware");
const AuthMiddleware = require("./authMiddleware");
const ValidateMiddleware = require("./validateMiddleware");

const authMiddleware = new AuthMiddleware();
const errorMiddleware = new ErrorMiddleware();
const validateMiddleware = new ValidateMiddleware();

module.exports = {
  authMiddleware,
  AuthMiddleware,
  errorMiddleware,
  ErrorMiddleware,
  validateMiddleware,
  ValidateMiddleware
}