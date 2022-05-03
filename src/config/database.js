const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    if (!MONGO_URI) {
      console.log("Cannot get MONGO_URI for connecting to database");
    }

    await mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB Connected..."))
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });
  }
}

module.exports = Database;
