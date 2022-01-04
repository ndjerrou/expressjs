const express = require("express");

const app = express();

//endpoints = routes
app.get("/", (req, res) => {
  res.send("Welcome to my homepage");
});

app.get("/temperature", (req, res) => {
  res.send("Le température à Paris est de 2 degrés...");
});

app.get("/about", (req, res) => {
  res.send("Je suis un développeur et je m'appelle Nissim");
});

const port = 3000;
app.listen(port, () => console.log(`Listenning on port ${port}...`));
