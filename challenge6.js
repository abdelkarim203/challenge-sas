console.log("afficher le profil")
console.log("afficher les parametres")
console.log("afficher les notifications")
console.log("afficher se deconnecter")


let prompt = require('prompt-sync')();
let choice = +prompt('enter your choice');

switch(choice) {
    case 1 :
        console.log("afficher le profil");
break;

case 2 :
        console.log("afficher les parametres");
break;

case 3 :
        console.log("afficher les notifications");
break;

case 4 :
        console.log("afficher se deconnecter");
break;
}