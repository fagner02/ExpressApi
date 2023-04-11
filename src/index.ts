import express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// export default app;
