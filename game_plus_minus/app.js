const stdin = process.openStdin();

const guest = Math.floor(Math.random() * 101);

let firstInput = parseInt(process.argv[2]);

if (firstInput !== guest) console.log("Raté ! Veuillez rééssayer : ");

stdin.addListener("data", function (d) {
  firstInput = d.toString().trim();
  if (firstInput < guest) {
    console.log("Plus !");
  } else if (firstInput > guest) {
    console.log("Moins !");
  } else {
    console.log("Félicitations, vous avez bien trouvé le nombre mystère");
    process.exit();
  }
});
