const { validationResult } = require("express-validator");
class AuthController {
  constructor() {
    this.onRegister();
  }

  onRegister = async (req, res, next) => {
    // const error = validationResult(req);

    // if (!error.isEmpty()) {
    //   return res.status(400).json({ errors: error.array() });
    // } else next();

    const object = Object.assign({}, req?.body);
    res?.json(object);
  };
}

module.exports = AuthController;
