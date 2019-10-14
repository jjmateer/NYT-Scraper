const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");
exports.home = function (req, res) {
    res.render("index")
}
exports.scrape = function (req, res) {
    axios.get("https://www.nytimes.com/section/world").then(function (response) {
        var $ = cheerio.load(response.data);
        $("div h2").each(function (i, element) {
            var result = {};
            result.title = $(this)
                .children("a")
                .text();
            result.link = $(this)
                .children("a")
                .attr("href");
            result.summary = $(this)
                .children("a")
                .attr("href");
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