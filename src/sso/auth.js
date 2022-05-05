const config = require("../config");
const axios = require("axios");

const url = config.constant.WSO2_AUTHENTICATION_URL;

class SSO {
  constructor() {}

  async signIn(req, res) {
    const { email, password } = req.body;
    console.log(` ====> SignIN SSO, ${email}`);


  }

  async signOut(req, res) {
    return res.clearCookie("token");
  }
}

module.export = SSO;
