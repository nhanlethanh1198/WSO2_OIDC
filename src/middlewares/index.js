const ErrorMiddleware = require("./errorMiddleware");
const AuthMiddleware = require("./authMiddleware");

module.exports.errorMiddleware = new ErrorMiddleware();
module.exports.authMiddleware = new AuthMiddleware();
