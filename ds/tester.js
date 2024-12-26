const queue = require("./queue");
const a = [2,3,4,5,6,9];
const q = new queue();
for(let e of a){
  q.push(e);
}
q.print();
console.log(q.pop(5).val);
console.log(q.pop(6).val);
q.print();
