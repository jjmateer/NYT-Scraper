const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const bodyparser = require("body-parser");
const router = require("./router");
const db = require("./models");
const app = express();

const PORT = process.env.PORT || 8080;

app.use("/", router);

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  