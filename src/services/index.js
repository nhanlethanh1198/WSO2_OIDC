const AuthService = require("./authService");
const SSOServices = require("./ssoService");

// class Services {
//   constructor() {
//     this.authService = new AuthService();
//     this.ssoServices = new SSOServices();
//   }
// }

const authService = new AuthService();
const ssoService = new SSOServices();

module.exports = {
  authService,
  AuthService,
  ssoService,
  SSOServices,
};
