import * as dotenv from "dotenv";
import sql from "./database";

dotenv.config();

export default {
  server: {
    host: "localhost",
    protocol: "http",
    debug: true,
    name: "LOCAL NAME",
    port: 6500,
    secret: process.env.SERVER_SECRET,
  },
  database: {
    mongo: process.env.MONGODB_URI,
    sessionSecret: process.env.SESSION_SECRET,
    defaultPageSize: 50,
    sql: sql.development,
  },
};
