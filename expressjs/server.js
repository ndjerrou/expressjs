import express from "express";
import chalk from "chalk";

const app = express();

app.get("/", (req, res) => {
  res.send(`<a href="/about"><button>Go to about page</button></a>`);
});

app.get("/about", (req, res) => {
  res.send("<h1>Je suis du html !!</h1>");
});

app.listen(3000, () =>
  console.log(chalk.green(`Server running on port ${3000}`))
);
