const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");
exports.home = function (req, res) {
    res.render("index")
}
exports.scrape = function (req, res) {
    axios.get("https://www.nytimes.com/section/world").then(function (response) {
        var $ = cheerio.load(response.data);
        $("article div").each(function (i, element) {
            var result = {};
            result.title = $(this)
                .children("h2")
                .children("a")
                .text()
            result.link = $(this)
            .children("h2")
            .children("a")
            .attr('href')
            result.summary = $(this)
            .children("p"[0])
            .text()
            // .hasClass("css-l8q78b e134j7ei1")
            db.Article.create(result)
                .then(function (dbArticle) {
                    console.log(dbArticle);
                })
                .catch(function (err) {
                    console.log(err);
                });
        })
    });
}
exports.getAll = function (req, res) {

}
exports.getOne = function (req, res) {

}
exports.postNote = function (req, res) {

}