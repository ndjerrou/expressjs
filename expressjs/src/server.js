const path = require("path");
const express = require("express");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

const port = 3000;

app.listen(port, () => console.log(`Listenning on port ${port}...`));
