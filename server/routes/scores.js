const express = require('express')
const router = express.Router();
const bodyParser = require("body-parser");

// create application/json parser
let jsonParser = bodyParser.json()

router.get('/', (req, res) => {
    res.send('scores');
});

router.post('/', jsonParser, (req, res) => {
    let body = req.body;
    res.send(body);
});

module.exports = router;