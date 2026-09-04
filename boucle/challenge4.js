const prompt = require('prompt-sync')();
let N = +prompt('enter your N : ');

for(let i = 1 ; i <= 10 ; i++){
    let z = N * i
    console.log(N + "*" + i + "=" + z );
}
