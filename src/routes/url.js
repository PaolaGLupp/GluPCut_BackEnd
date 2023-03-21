const express = require('express');
const router = express.Router();
const createShortUrl  = require("../controllers/urlShortenerController")
const {getUrl} = require("../controllers/urlGet")

//MIDDLEWARES
const urlValidator = require("../middlewares/urlValidator");
const tokenValidator = require('../middlewares/tokenValidator')


// URL GET
router.get('/:id', getUrl)

// URL SHORTENER
router.post("/", tokenValidator, urlValidator, createShortUrl);

module.exports = router;