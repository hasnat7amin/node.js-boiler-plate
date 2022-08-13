const express = require("express");
const bodyParser = require("body-parser");
const toobusy = require('toobusy-js');
const cors = require("cors");
const helmet = require("helmet");
const hpp = require('hpp');
const app = express(); 

app.use(express.urlencoded({ extended: true, limit: "1kb" }));
app.use(express.json({ limit: "1kb" }));             
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 

app.use(cors());
app.use(helmet());
app.use(hpp());

app.use(function(req, res, next) {
    if (toobusy()) {
        logger.error("server is too busy.please try again later")
        res.send(503, "Server Too Busy");
    } else {
    next();
    }
});

module.exports = app;