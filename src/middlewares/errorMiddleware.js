class ErrorMiddleware {
  constructor() {
    this.error();
  }

  async error(err, req, res, next) {
    if (err) {
      res.status(err.code || 500).json({
        message: err.message,
        stack: err.stack,
      });
    }
  }
}

module.exports = ErrorMiddleware;