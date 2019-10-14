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
            result.link = `https://www.nytimes.com${$(this)
                .children("h2")
                .children("a")
                .attr('href')}`
            result.summary = $(this)
                .children("p"[0])
                .text()
            db.Article.create(result)
                .then(function (dbArticle) {
                    // console.log(dbArticle);
                })
                .catch(function (err) {
                    // console.log(err);
                });
        });
    }).then(() => {
        res.redirect("/articles")
    })
}
exports.getAll = function (req, res) {
    db.Article.find({})
        .then(function (results) {
            var titleArr = [];
            var linkArr = [];
            var summaryArr = [];
            for (let i = 0; i < results.length; i++) {
                titleArr.push(results[i].title)
                linkArr.push(results[i].link)
                summaryArr.push(results[i].summary)
            }
            res.render("index", { titles: titleArr, links: linkArr, summaries: summaryArr })
        })
        .catch(function (err) {
            res.json(err);
        });
}
exports.getOne = function (req, res) {
    db.Article.findOne({ _id: req.params.id })
        .populate("note")
        .then(function (dbArticle) {
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(dbArticle);
        })
        .catch(function (err) {
            res.json(err);
        });
}
exports.postNote = function (req, res) {

}