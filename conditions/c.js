
const prompt = require('prompt-sync')();
let n = +prompt('enter your n : ');

let counter = 0;
for (let i = 0; i <= n; i++) {
    if (i % 2 != 0){
        counter++;
    }

} 

console.log("il y a " + counter + " nombres impaires !");