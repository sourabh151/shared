const readline = require("readline");
// const rl = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
const { readFileSync } = require("fs");
const { log } = require("console");
const { random } = require("lodash");
let list = readFileSync("./list.txt", { encoding: "utf-8" }).split("\r\n");
let correct = [null, null, null, null, null];
let notCorrect = [];
let inTheWord = [];
// console.log(list);
// const correct = [null,null,null,null,null];
function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

function parseHint(hint) {
  //a2l1o0n0e0
  for (let i = 0; i < hint.length; i += 2) {
    if (hint[i + 1] === "2") {
      correct[i / 2] = hint[i];
    } else if (hint[i + 1] === "1") {
      inTheWord.push(hint[i]);
    }
    else{
        notCorrect.push(hint[i]);
    }
  }
}


function spit(hint) {
  if (!hint) {
    return list[random(0, list.length, false)];
  }
  parseHint(hint);

  list = list.filter((word) => {
    for (c of word) {
      for (itw of inTheWord) {
        if (itw === c) {
          return true;
        }
      }
    }
    return false;
  });

  correct.forEach((v, i) => {
    if (!v) {
      return;
    }
    list = list.filter((word) => {
      if (word[i] === v) {
        return true;
      }
      return false;
    });
  });

  list = list.filter((word) => {
    for (c of word) {
      for (itw of notCorrect) {
        if (itw === c) {
          return false;
        }
      }
    }
    return true;
  });

  console.log(list);
  return list[random(0,list.length,false)];
}

console.log(spit());

async function main(){
    while (list.length > 1) {
        const ans = await askQuestion("enter next hint:\n");
        console.log(spit(ans));;
    }
}
main();

// while (list.length > 1) {
//   rl.question("pass the hints \n", (ans) => {
//     spit(ans);
//     rl.close();
//   });
// }


// console.log(list);

// rl.question("hi! what is your name?",(ans)=>{
//     console.log(ans);
//     rl.close();
// })
