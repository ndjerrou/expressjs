const express = require("express");

const fs = require("fs");
const path = require("path");

const pathProductsJSON = path.join(__dirname, "./data/products.json");

const products = JSON.parse(fs.readFileSync(pathProductsJSON).toString()); // string json --> objet js

const app = express();

app.use(express.json());

app.get("", (req, res) => {
  // res==>response
  console.log("requête entrante sur la homepage");
  res.send("Homepage");
});

app.get("/products", (req, res) => {
  res.status(200).send(products);
});

app.post("/products", (req, res) => {
  const product = req.body;

  product.id = products[products.length - 1].id + 1;

  products.push(product);

  res.status(201).send(products);
});

app.listen(3000, () => console.log("Listenning on port 3000..."));
