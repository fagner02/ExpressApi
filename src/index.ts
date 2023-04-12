// import http = require("http");
// import https = require("https");
import serverless = require("serverless-http");
import express = require("express");
import cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
});

// http.createServer(app).listen(3000, () => {});
// https.createServer(app).listen(3001, () => {});
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

module.exports.handler = serverless(app);
// export default app;
