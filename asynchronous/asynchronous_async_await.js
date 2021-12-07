// ES6 - Async Await

// function getTodos() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting todos...");
//       const todos = ["Todo 1", "Todo 2", "Todo 3"];
//       resolve(todos);
//     }, 3000);
//   });
// }

// getTodos().then((todos) => {
//   console.log(todos);
// });

// function getTodos() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting todos...");
//       const todos = ["Todo 1", "Todo 2", "Todo 3"];
//       resolve(todos);
//     }, 3000);
//   });
// }

// 1 - each function with the keyword async returns a Promise

async function fetch() {}

const fetch1 = async () => {};

console.log(fetch());

fetch()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
