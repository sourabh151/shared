const { genSaltSync, hashSync,decodeBase64,compareSync } = require("bcryptjs")
const pass = "sourabh";
let s = genSaltSync(12);
let pc = hashSync(pass,s);
console.log(pc);
console.log(s);
console.log(decodeBase64("ic9xUBkSgXpTmyVJE",7))
console.log(compareSync(pass,pc))
