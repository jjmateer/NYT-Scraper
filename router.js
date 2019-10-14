const express = require("express");
const router = express.Router();
const controller = require("./controller/controller.js")

router.get("/", controller.home);
router.get("/scrape", controller.scrape);
router.get("/articles/:id", controller.getOne);
router.post("/articles/:id", controller.postNote);
router.get("/clear", controller.clear)


module.exports = router;