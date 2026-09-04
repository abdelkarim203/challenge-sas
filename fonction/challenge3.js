
function genererEmail(prenom , nom){
    let p = prenom.toLowerCase();
    let n = nom.toLowerCase();
    let email = `${p}.${n}${`@entreprise.com`}`;
    return email;

}
console.log(genererEmail("best" , "redouan"))
