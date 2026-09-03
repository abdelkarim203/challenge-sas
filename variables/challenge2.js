const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("entre budget en mad: ", (MAD) => {
    let EUR = MAD / 11;
  console.log("budget en eur: "+EUR);
  rl.close();
});