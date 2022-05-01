import * as dotenv from "dotenv";
// import { config } from "../config";
// const os = require("os");
// import os from "os";
// const sql = require("./database");
import sql from "./database";

dotenv.config();

export default {
  PORT: process.env.PORT || 8000,
  server: {
    host: process.env.HOST_NAME,
    protocol: "http",
    debug: true,
    name: "SERVER NAME",
    port: process.env.PORT || 6000,
    secret: process.env.SERVER_SECRET,
  },
  database: {
    mongo: process.env.MONGOLAB_URI,
    sessionSecret: process.env.SESSION_SECRET,
    defaultPageSize: 50,
    sql: sql.production,
  },
};
