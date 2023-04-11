"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    console.log("Hello World");
    res.send("Hello World");
});
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=../src/src/index.js.map