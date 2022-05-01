import * as dotenv from "dotenv";
dotenv.config();

export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "postgresql",
    // "ssl": true,
    // "dialectOptions": {
    //   "ssl": {
    //     "require": true
    //   }
    // }
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "postgresql",
  },
  production: {
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASS,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_HOST,
    dialect: "postgresql",
    // Setup For GCLOUD
    // "dialectOptions": {
    //   "socketPath": `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
    // },
    // "ssl":true,
    // "dialectOptions":{
    //    "ssl":{
    //       "require":true
    //    }
    // }
  },
};
