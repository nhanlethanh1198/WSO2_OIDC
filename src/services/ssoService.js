const config = require("../config");
const axios = require("axios");
require("dotenv").config();

const url = config.constant.WSO2_AUTHENTICATION_URL;

class SSO {
  constructor() {
    this.config = config;
  }

  async testConnectionToWSO2(req, res) {
    const { CLIENT_ID, CLIENT_SECRET } = config.constant;

    const data = `${CLIENT_ID}:${CLIENT_SECRET}`;
    const buff = new Buffer.from(data);
    // base64 encoded
    const encoded = buff.toString("base64");
    // process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

    const requestToken = req.query.code;
    console.log(requestToken + "\n");
    console.log(encoded);

    const URL = `${url}?grant_type=authorization_code&code=${requestToken}&redirect_uri=${config.constant.REDIRECT_URL}`;
    const response = await axios
      .post(URL, {
        headers: {
          Authorization: `Basic ${encoded}`,
          accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    res.json({ ...response });
  }

  async signIn(req, res) {
    try {
      const { username, password } = req.body;

      const response_from_wso2 = await axios.get(url, {
        auth: {
          username: username,
          password: password,
        },
      });

      console.log(response_from_wso2.data);

      return res.json(response_from_wso2.data);
    } catch (err) {
      console.log(err);
      return res.json(err);
    }
  }

  async signOut(req, res) {
    return res.clearCookie("token");
  }
}

module.exports = SSO;
