

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question("entre la durée du film en minutes: ",(duree) =>{
 if (duree <= 60) {
    console.log("court metrage");
 } else if (60 > duree > 120) {
    console.log("film standard");
 } else if (duree => 120) {
    console.log("film long");
 }
})