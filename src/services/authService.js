const jwt = require('jsonwebtoken');
const config = require('../config/');

class AuthService {
  constructor() {
    this.config = config;
  }

  async generateToken(user) {
    const { _id } = user;
      return await jwt.sign({_id}, this.config.constant.VERIFY_TOKEN, {
        expiresIn: '10h',
    });
  }

  async verifyToken(token) {
    return await jwt.verify(token, this.config.constant.VERIFY_TOKEN);
  }
}

module.exports = AuthService;