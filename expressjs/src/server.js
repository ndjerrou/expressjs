const express = require("express");

const app = express();

//endpoints = routes
app.get("/", (req, res) => {
  res.send("/public/index.html");
});

const port = 3000;
app.listen(port, () => console.log(`Listenning on port ${port}...`));
