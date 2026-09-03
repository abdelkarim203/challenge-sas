let prompt = require('prompt-sync')();
let age = prompt('entrer age : ');

console.log("age : " + age)
if (age >= 18){
    console.log("acces autorise");
} else{
    console.log("acces refuse");
}