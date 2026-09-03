const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Please enter your name: ", (name) => {
  // User input is available as `name`
  console.log(`Hello, ${name}!`);
  rl.close();
});