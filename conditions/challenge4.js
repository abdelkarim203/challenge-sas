//start
//enter your montant
//if montant >= 500 >> liv free
//else >> liv = 40dh


const prompt = require('prompt-sync')();
let montant = +prompt (' enter your montant');

if(montant >= 500)

{
    console.log("free livraison");
}

else
{
    console.log("livraison  = 40 ");
    console.log("total = " ,(montant + 40));
}