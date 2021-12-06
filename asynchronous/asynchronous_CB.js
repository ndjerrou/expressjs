function getUser(cb) {
  setTimeout(() => {
    console.log("Getting user info ...");
    const user = { username: "Nissim", id: 1 };
    cb(user);
  }, 3000);
}

function getRepos(user, cb) {
  setTimeout(() => {
    console.log("Getting repos from user...");
    const repos = ["Repo 1", "Repo 2", "Repo 3"];
    cb(repos);
  }, 3000);
}

function getComments(repo, cb) {
  //simulate db's access
  setTimeout(() => {
    console.log("Getting comments on repo ..."); //spinner
    const comments = ["Good job", "Very good", "Need some css improvements"]; // results of my request
    cb(comments); // we invoke the callback to send back the results
  }, 3000);
}

getUser((user) => {
  getRepos(user, (repos) => {
    getComments(repos[0], (comments) => {
      console.log(comments);
    });
  });
});

// We can fall into what we call a callback hell hardly maintainable
