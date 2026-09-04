
function saluerClient(nom , titre = "Client"){
    let n = nom
    let t = titre
    let b = (`bonjour ${t} ${n}`)
    return b;

}
console.log(saluerClient("redouan"))