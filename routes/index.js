const express = require('express');
const router = express.Router();

let urls = new Map([["rickRoll", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]]);

function createRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}


/* GET home page. */
router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.post("/", (req, res) => {
    const link = req.body.link;
    let endpoint = req.body.endpoint;
    if (!link) {
        res.render("index.ejs");
    } else {
        if (!endpoint) {
            endpoint = createRandomString(8);
        }
        urls.set(endpoint, link);
        res.render("index.ejs", {newLink: "http://localhost:3000/" + endpoint});
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
