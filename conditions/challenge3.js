let prompt = require('prompt-sync')();
let note = prompt('entrer note : ');

console.log("note : " + note);
if(note >= 10)
    console.log("admis");
else if(note < 10)
    console.log("non admis");