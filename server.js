const https = require("https");
const fs = require("fs");
const path = require("path");
const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());
app.get("/secret", (req, res) => {
  return res.send("Secure key is 40");
});

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(4000, () => {
    console.log("Server started on port 4000");
  });
