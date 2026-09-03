const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("entre stockage: ", (Stockage) => {
  let mb = gb * 1024;
  console.log("resultat:"+mb);
  rl.close();
});