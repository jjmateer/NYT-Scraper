const express = require("express");
const router = express.Router();
const controller = require("./controller/controller.js")

router.get("/", controller.home);

module.exports = router;