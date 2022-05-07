require("dotenv").config();

const constant = {
    "VERIFY_TOKEN": process.env.VERIFY_TOKEN,
    "WSO2_AUTHENTICATION_URL": process.env.WSO2_AUTHENTICATION_URL,
    "CLIENT_ID": process.env.CLIENT_ID,
    "CLIENT_SECRET": process.env.CLIENT_SECRET,
    "REDIRECT_URL": process.env.REDIRECT_URL,
}

module.exports = constant;
