const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const expressValidator = require("express-validator");
const routes = require("./src/routes");

const { database } = require("./src/config");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
// app.use(expressValidator());
app.use(express.json())
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());

database.connect();

app.get("/", (req, res) => {
  res.send("API for server");
});

app.use("/api*", cors());
app.use("/api", require("./src/routes"));

app.use((err, req, res, next) => {
  if (err) {
    res.status(err.code || 500).json({
      message: err.message,
      stack: err.stack,
    });
  }
});

module.exports = app;
