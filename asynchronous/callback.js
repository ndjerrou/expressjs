const forEachSolacoup = require("./forEach");

forEachSolacoup([1, 2, 3], (el) => {
  console.log(el);
});

[1, 2, 3].forEach((el) => {
  console.log(el);
});

const fs = require("fs");

// async call to writeFile
console.log("L1");
console.time("writeFile Async");
fs.writeFile(
  __dirname + "/file1.js",
  "Je suis un fichier écrit grâce au module fs proposé par nodejs",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("The file has been correctly created");
  }
);
console.timeEnd("writeFile Async");
console.log("L2");

// sync call to writeFile
console.log("L3");
console.time("writeFile Sync");
fs.writeFileSync(
  __dirname + "/fileSync1.js",
  "Je suis un fichier écrit de manière synchrone grâce au module fs proposé par nodejs"
);
console.timeEnd("writeFile Sync");

console.log("L4");
