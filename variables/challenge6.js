 const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Please enter your 1fst score  : ", (score partie1) => {
        rl.question("Please enter your 3rd score : ", (score partie 3) => {
            rl.question("Please enter your 4rt score : ", (score partie 4) => {
               let totalscore = (score partie 1 + score partie 2 + score partie 3 + score partie 4);
                let moyenscore = score total/4;
  
  console.log("partie 1 : "+score partie 1);
  onsole.log("partie 2 : "+score partie 2);
  onsole.log("partie 3 : "+score partie 3);
  onsole.log("partie 4 : "+score partie 4);
   console.log("Score total : " + total score);
  console.log("moyenne : " + moyenscore);
  rl.close();
});
});
});
});