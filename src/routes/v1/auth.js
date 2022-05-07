const express = require("express");
const router = express.Router();
// const asyncHandler = require("express-async-handler");
// const { validationResult } = require("express-validator");

// Middleware
const middleware = require("../../middleware");
const controllers = require("../../controllers");

router.post(
  "/register",
  // middleware.authMiddleware.validateRegister,
  controllers.authController.onRegister
);

router.post(
  "/login",
  // middleware.authMiddleware.validateLogin,
  controllers.authController.onLogin
);

router.get("/test", controllers.authController.testConnectToWSO2);

router.get("/callback", controllers.authController.signIn);

module.exports = router;
