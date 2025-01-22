const express = require('express');
const router = express.Router();

let urls = new Map([
    ["rickRoll", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
]);

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.post("/", (req, res) => {
    const link = req.body.link;
    const endpoint = req.body.endpoint;
    if (!link) {
        res.render("index.ejs");
    } else {
        urls.set(endpoint, link);
        res.render("index.ejs", {newLink: "localhost:3000/" + endpoint});
    }
})

router.get("/:endpoint", (req, res) => {
    const endpoint = req.params.endpoint;
    const originalURL = urls.get(endpoint);
    if (!originalURL) {
        res.render("error.ejs");
    } else {
        res.redirect(originalURL);
    }
})

module.exports = router;
