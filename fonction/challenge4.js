
function saluerClient(nom, titre = "client"){
    let n = nom;
    let t = titre;
    let c = `bonjour ${t} ${n}`
    return c;
}
console.log(saluerClient ( "karim"));

