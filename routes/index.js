const express = require('express');
const router = express.Router();

let urls = new Map([
    ["rickRoll", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
]);

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {title: 'Express'});
});

router.post("/", (req, res) => {
})

router.get("/:endpoint", (req, res) => {
    const endpoint = req.params.endpoint;
    const originalURL = urls.get(endpoint);
    if (!originalURL) {
        res.send("link not found");
    } else {
        res.redirect(originalURL);
    }
})

module.exports = router;
