const path = require("path");
const express = require("express");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

//endpoints = routes
app.get("/", (req, res) => {
  res.send("/public/index.html");
});

const port = 3000;
app.listen(port, () => console.log(`Listenning on port ${port}...`));
