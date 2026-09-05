
function calculerSomme(tab){
      let s = 0;
    for (let i = 0 ; i < tab.length ; i++ ){
      
        s = s + tab[i];
        
    }
    return s;
}
let somme=calculerSomme ([3 , 5 , 20 , 54]);
console.log(somme);