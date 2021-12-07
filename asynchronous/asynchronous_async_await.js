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

// async function fetch() {}

// const fetch1 = async () => {};

// console.log(fetch());

// fetch()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// ------------------------------------------------------

const url = "https://jsonplaceholder.typicode.com/todos";
const axios = require("axios"); // we wanna use the module axios in our code

// please axios, make a get request to the url specified
// axios.get(...) returns a promise. we need to handle this promise
axios
  .get(url)
  .then(({ data }) => {
    //  console.log(data);
  })
  .catch((err) => console.log("ERR : ", err.message));

// exercice

// we wanna get thanks to the jsonplaceholder API the total users (log)

const url1 = "https://jsonplaceholder.typicode.com/users";

axios(url1)
  .then(({ data }) => {
    // console.log(data);
  })
  .catch((err) => console.log(err));

// we wanna get thanks to the jsonplaceholder API the user with the id 2

const url2 = "https://jsonplaceholder.typicode.com/users/2";

// axios(url2)
//   .then(({ data }) => {
//     console.log("SECOND USER : ", data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// or...

// ----------------------------------------------------------------------

axios(url1)
  .then(({ data: users }) => {
    const user = users.find((user) => user.id === 2);
    // console.log("user = ", user);
  })
  .catch((err) => {
    // console.log(err.message);
  });

// Transformation with async await - sucre syntaxique pour éviter d'utiliser les Promises

// const getUsers = async () => {
//   const { data } = await axios(url1);
//   console.log(data);
// };

// getUsers();
// console.log("après ma fonction getUsers");

// How to handle the errors ? we use the try catch block

const getUsers = async () => {
  try {
    const { data } = await axios(url1 + "/kikoo");
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

// getUsers();

// Exercice

// Consulter l'api POKEMON

// Afficher en log une ou plusieurs infos qui vous intéresse

// 1 - gestion avec des Promises

// 2 - gestion avec async await

// ------------------------------------------------------------------------------ //

// Correction

// With promises

// const fetchPokemon = (pokemon) => {
//   const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

//   axios(urlPokemon)
//     .then(({ data: pokemon }) => {
//       console.log(pokemon);
//     })
//     .catch((err) => console.log(err.message));
// };

// fetchPokemon("ditto");

// or .........

// With async version

const fetchPokemon = async (pokemon) => {
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const {
      data: { abilities }
    } = await axios(urlPokemon); // destructuring sur plusieurs niveaux

    abilities.forEach(({ ability }) => console.log(ability.name));
  } catch (err) {
    console.log(err.message);
  }
};

fetchPokemon(process.argv[2]);
