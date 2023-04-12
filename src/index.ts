import serverless = require("serverless-http");
import express = require("express");
import cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));

const router = express.Router();
router.get("/", (req, res) => {
  console.log("Hello World");
  res.status(200).send("Hello World");
});

app.use("/.netlify/functions/index", router);

module.exports.handler = serverless(app, {});
