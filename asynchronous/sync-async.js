console.log("L1");
setTimeout(() => {
  //simulate db access
  console.log("L2");
}, 3000);
console.log("L3");
console.log("L4");

// A callback is a function sent into a function and invoked into this function
