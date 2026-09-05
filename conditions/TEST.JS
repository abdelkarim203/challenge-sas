const prompt = require('prompt-sync')();
let n = +prompt('enter your n : ');

let calculer = 0
for(i = 0 ; i <= n ; i++){

    if( i % 2 === 0 && i != 0 ){
        
        calculer++
        console.log(i)
}


}
console.log("il y a " + calculer + " pair")