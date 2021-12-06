// Promises : a way of handling asynchronous code (success or not)

// A promise owns it's own state : pending, fullfilled or rejected

// pending
const p = new Promise((resolve, reject) => {});
//console.log(p);

// fullfilled
const p1 = new Promise((resolve, reject) => {
  resolve({ username: "Nissim", id: 1 });
});
// the consumer :
// p1.then((data) => {
//   console.log(data);
// });

// rejected
// const p2 = new Promise((resolve, reject) => {
//   reject("Error connecting to DB");
// });
// handling the errors
//p2.catch((err) => console.log(err));

// ------------------------------------------------------------

// Exercice

// getUser needs to return a Promise with a success

// function getUser(cb) {
//   setTimeout(() => {
//     console.log("Getting user info ...");
//     const user = { username: "Nissim", id: 1 };
//     cb(user);
//   }, 3000);
// }

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting info on user ...");
      const user = { username: "Nissim", id: 1 };
      resolve(user);
    }, 3000);
  });
}

getUser().then((user) => {
  console.log(user);
});

// function getRepos(user, cb) {
//   setTimeout(() => {
//     console.log("Getting repos from user...");
//     const repos = ["Repo 1", "Repo 2", "Repo 3"];
//     cb(repos);
//   }, 3000);
// }

// function getComments(repo, cb) {
//   //simulate db's access
//   setTimeout(() => {
//     console.log("Getting comments on repo ..."); //spinner
//     const comments = ["Good job", "Very good", "Need some css improvements"]; // results of my request
//     cb(comments); // we invoke the callback to send back the results
//   }, 3000);
// }

// getRepos needs to return a Promise with a success

// getComments needs to return a Promise with a success
