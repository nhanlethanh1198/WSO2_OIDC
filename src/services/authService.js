const jwt = require("jsonwebtoken");
const SSO = require("./ssoService");

class AuthService extends SSO {
  constructor() {
    super();
  }

  async generateToken(user) {
    const { _id } = user;
    return await jwt.sign({ _id }, this.config.constant.VERIFY_TOKEN, {
      expiresIn: "10h",
    });
  }

  async verifyToken(token) {
    return await jwt.verify(token, this.config.constant.VERIFY_TOKEN);
  }

  async registerUser(user) {}
}

module.exports = AuthService;
