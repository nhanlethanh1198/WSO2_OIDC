const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./src/routes");

const { database } = require("./src/config");

const app = express();

app.use(morgan("dev"));
app.use(helmet());

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());

database.connect();

app.use(cors())

app.use(require("./src/routes"));

app.use((err, req, res, next) => {
  if (err) {
    res.status(err.code || 500).json({
      message: err.message,
      stack: err.stack,
    });
  }
});

module.exports = app;
