"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serverless = require("serverless-http");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors({ origin: "*" }));
app.get("/", function (req, res) {
    console.log("Hello World");
    res.send("Hello World");
});
module.exports.handler = serverless(app);
//# sourceMappingURL=../src/src/index.js.map