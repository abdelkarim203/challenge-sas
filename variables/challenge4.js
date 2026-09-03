const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("entre Distance: ", (kilometres) => {
    rl.question("entre carburant: ", (litres) => {
 let consommation = (litres / kilometres) * 100;
 console.log("carburant:"+consommation);
 rl.close();
});
});