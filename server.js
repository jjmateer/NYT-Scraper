const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const bodyparser = require("body-parser");
const router = require("./router");
const db = require("./models");
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 8080;

app.use("/", router);

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

var dbUrl = `mongodb+srv://jjmateer:${process.env.MONGO_PW}@cluster0-q0kab.mongodb.net/NYT-Scraper?retryWrites=true&w=majority`;

mongoose.connect(dbUrl, err => {
    console.log("Connected to mongoose");
    if (err) {
        console.log(err)
    }
});


app.listen(PORT, () => {
    console.log(`Connected to port: http://localhost:${PORT}`)
})
