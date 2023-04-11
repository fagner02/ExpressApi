"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var https = require("https");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors({ origin: "*" }));
app.get("/", function (req, res) {
    console.log("Hello World");
    res.send("Hello World");
});
http.createServer(app).listen(3000, function () { });
https.createServer(app).listen(3001, function () { });
//# sourceMappingURL=../src/src/index.js.map