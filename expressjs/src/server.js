const path = require("path");
const express = require("express");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "ejs");
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Nissim"
  });
});

app.get("/temperature/:city", (req, res) => {
  console.log(req.params.city);
  res.send("ok");
});

const port = 3000;

app.listen(port, () => console.log(`Listenning on port ${port}...`));
