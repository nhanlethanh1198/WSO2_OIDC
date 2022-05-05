const router = require("express").Router();

router.use("/v1", require("./v1"));
router.use("/oauth", require("./oauth"));

module.exports = router;