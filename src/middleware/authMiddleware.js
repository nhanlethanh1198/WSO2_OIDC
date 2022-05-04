const jwt = require("jsonwebtoken");
const { check } = require("express-validator");

class AuthMiddleware {
  constructor() {
    this.validateRegister();
    this.validateLogin();
    this.verifyToken();
  }

  validateRegister() {
    return [
      check("username").isString().withMessage("Username must be a string"),
      check("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("Email must be a valid email"),
      check("password").isString().withMessage("Password must be a string"),
    ];
  }

  validateLogin() {
    return [
      check("username").isString().withMessage("Username must be a string"),
      check("password").isString().withMessage("Password must be a string"),
    ];
  }

  async verifyToken(req, res, next) {
    const token =
      req?.body.token || req?.query.token || req?.headers["x-access-token"];

    if (!token) {
      return res
        ?.status(401)
        .send("You are not authorized to access this resource");
    }

    try {
      const decoded = jwt.verify(token, config.VERIFY_TOKEN);
      req.user = decoded;
    } catch (err) {
      res?.status(401).send("You are not authorized to access this resource");
    }
    return next();
  }
}

module.exports = AuthMiddleware;
