// const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const config = require("../config");
const jwt = require("jsonwebtoken");
const Services = require("../services");

class AuthController {

    constructor() {
        this.services = new Services();
    }

    async onRegister(req, res) {
        // const error = validationResult(req);

        // if (!error.isEmpty()) {
        //   return res.status(400).json({ errors: error.array() });
        // } else next();

        const object = Object.assign({}, req?.body);
        // res?.json(object);

        const {username, email, password} = object

        const user = await User.findOne({email});

        if (user) {
            return res.status(400).json({errors: [{msg: 'User already exists'}]})
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
                password: hashed_password
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
                        console.log(err)
                    } else {
                        res.cookie('token', token, {
                            httpOnly: true,
                            maxAge: 360000,
                            secure: false,
                        }).json({token});
                    }
                }
            );
        }

    };
}

module.exports = AuthController;
