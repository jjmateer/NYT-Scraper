const express = require("express");
const router = express.Router();
const controller = require("./controller/controller.js")

router.get("/", controller.home);
router.get("/scrape", controller.scrape);
router.get("/article/:id", controller.getOne);
router.post("/postnote/:id", controller.postNote);
router.post("/save/:id", controller.save);
router.get("/saved", controller.saved);
router.get("/clear", controller.clear)


module.exports = router;    