import { config } from "../config";
import { Sequelize } from "sequelize";

// let option = undefined;
// if (process.env.NODE_ENV === "production") {
//   option = {
//     logging: false,
//     host: config.database.sql["host"],
//     dialect: config.database.sql["dialect"] || "postgres",
//     // default setting

//     pool: {
//       max: 5,
//       min: 0,
//       idle: 20000,
//       acquire: 20000,
//     },
//     timezone: "+07:00",
//     // "dialectOptions": {
//     //   "ssl": {
//     //       "require": true
//     //   }
//     // }
//   };
// } else {
//   option = {
//     logging: false,
//     host: config.database.sql["host"],
//     dialect: config.database.sql["dialect"] || "postgres",
//     // default setting
//     pool: {
//       max: 5,
//       min: 0,
//       idle: 20000,
//       acquire: 20000,
//     },
//     timezone: "+07:00",
//     // "dialectOptions": {
//     //   "ssl": {
//     //       "require": true
//     //   }
//     // }
//   };
// }
const sequelize = new Sequelize(
  config.database.sql["database"],
  config.database.sql["username"],
  config.database.sql["password"],
  {
    logging: false,
    host: config.database.sql["host"],
    dialect: "postgres",
    // default setting
    pool: {
      max: 5,
      min: 0,
      idle: 20000,
      acquire: 20000,
    },
    timezone: "+07:00",
  }
);

export { Sequelize, sequelize };
