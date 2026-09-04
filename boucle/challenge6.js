
const prompt = require('prompt-sync')();
let number = +prompt('enter your number : ');

let i = 0;
while(i <= number){
    console.log(number);
    number--
}