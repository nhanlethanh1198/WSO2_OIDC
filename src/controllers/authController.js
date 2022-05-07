// const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const config = require("../config");
const jwt = require("jsonwebtoken");
const { AuthService, authService } = require("../services");
const { authMiddleware } = require("../middleware");

class AuthController extends AuthService {
  constructor() {
    super();
  }

  async onRegister(req, res) {
    const object = Object.assign({}, req?.body);
    // res?.json(object);

    const { username, email, password } = object;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    } else {
      let hashed_password;
      try {
        const salt = await bcrypt.genSalt(10);
        hashed_password = await bcrypt.hash(password, salt);
      } catch (err) {
        console.error(err.message);
        res?.status(500).send("Server error");
      }

      const newUser = await User.create({
        username,
        email,
        password: hashed_password,
      });

      const payload = {
        user: {
          _id: newUser._id,
        },
      };

      // const token = this.services.authService.generateToken(payload)

      await jwt.sign(
        payload,
        config.constant.VERIFY_TOKEN,
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) {
            console.log(err);
          } else {
            res
              .cookie("token", token, {
                httpOnly: true,
                maxAge: 360000,
                secure: false,
              })
              .json({ token });
          }
        }
      );
    }
  }

  async onLogin(req, res) {
    const { email, username, password } = req.body;

    console.log(req.body);

    const user = email
      ? await User.findOne({ email })
      : await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User does not exist" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    const payload = {
      user: {
        _id: user._id,
      },
    };

    // const token = this.services.authService.generateToken(payload)

    await jwt.sign(
      payload,
      config.constant.VERIFY_TOKEN,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) {
          console.log(err);
        } else {
          res
            .cookie("token", token, {
              httpOnly: true,
              maxAge: 360000,
              secure: false,
            })
            .json({ token });
        }
      }
    );
  }

  async testConnectToWSO2(req, res) {
    try {
      const data = await authService.testConnectionToWSO2(req, res);
      res.json({
        message: "Connected to WSO2",
      });
    } catch (err) {
      console.log(err);
      res.json({
        message: "Error connecting to WSO2",
      });
    }
  }

  onRegisterMiddleware() {
    return [
        ...authMiddleware.validateLogin()
    ]
  }

}

module.exports = AuthController;
