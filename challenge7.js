const prompt = require('prompt-sync')();
let nombre = +prompt('enter nombre : ');

console.log("nombre : " + nombre);
if(nombre < 0 )
    console.log("le nombre negatif")