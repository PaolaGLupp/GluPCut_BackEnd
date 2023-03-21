const express = require('express');
const router = express.Router();
const app = express();
const mongoSanitize = require('express-mongo-sanitize');

app.use(mongoSanitize())


router.use("/", require('./user'));
router.use('/', require('./url'));


router.use('/shortener', require('./url'));


router.get("/", (req, res) => {
    res.send("Thanks for login!");
});

module.exports = router;