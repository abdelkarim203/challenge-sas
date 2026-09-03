

const prompt = require('prompt-sync')();
let X = +prompt('enter your X : ');

for(CR = 2 ; CR <= X ; CR = CR+2){
    console.log(CR)
}