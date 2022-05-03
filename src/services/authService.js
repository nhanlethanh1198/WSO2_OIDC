const jwt = require('jsonwebtoken');
const config = require('../config/');

class AuthService {
  constructor() {
    this.config = config;
  }

  async generateToken(user) {
    const { _id } = user;
      return await jwt.sign({_id}, this.config.constant.VERIFY_TOKEN, {
        expiresIn: '1h',
    });
  }

  async verifyToken(token) {
    return jwt.verify(token, this.config.jwtSecret);
  }
}

module.exports = AuthService;