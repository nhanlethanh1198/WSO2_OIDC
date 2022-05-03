const Database = require("./database");

const database = new Database();
const constant = require("./constant")

const config = {
    database,
    constant
};

module.exports = config;
