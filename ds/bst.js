const { doubleNode } = require("./node");
const queue = require("./queue.js");

class Bst {
  root = null;
  t = null;
  push(e, r = this.root) {
    if (r === null) {
      this.t = new doubleNode(e);
      if (this.root === null) {
        this.root = this.t;
      }
      return this.t;
    }
    else {
      if (e <= r.val)
        r.left = this.push(e, r.left);
      else
        r.right = this.push(e, r.right);
      return r;
    }
  }
  print(r = this.root) {
    this.t = new queue(r);
    let temp, s = "", l = -1, c = 0, h = 0, i = 0, spaces = 0;

    while (this.t.head) {
      if (c == h) {
        l++;
        h = Math.pow(2, l);
        c = 0;
        console.log();
        console.log(s);
        s = "";
        spaces = Math.floor(57 / (h + 1));
      }
      c++;
      for (i = 0; i < spaces; i++) {
        s += " ";
      }
      //console.log("h=",h)
      temp = this.t.pop().val;
      if (temp) {
        //console.log(temp.val);
        s += (`${temp.val}`);
        if (temp.left || temp.right) {
          this.t.push(temp.left);
          this.t.push(temp.right);
        }
      } else {
        //console.log(null)
        s = s.slice(0, s.length - 3);
        s += "null";
      }
      //console.log("________________________________________________________");
    }
    console.log();
    console.log(s)
    console.log()
  }
  //pop(e=null){
  //  if(e===null){
  //    this.t=this.root.left;
  //    while(true){
  //      if(this.t.right!==null){
  //        this.t=this.t.right;
  //      }
  //      else
  //    }
  //  }
  //}
  constructor(v) {
    if (typeof (v) === "object" || typeof (v) === "string") {
      for (let e of v) {
        this.root = this.push(e);
      }
    }
    else if (v)
      this.root = this.push(v);
  }
}
let b = new Bst();
b.push(3);
b.push(1);
b.push(9);
b.push(5);
b.push(2);
b.push(7);
b.push(0);
b.push(31);
b.push(23);
b.push(17);
b.push(6);
//b.print();
//console.log(b.root.right.right);
//this.t = this.root;
//this.root = this.max(t.left)
//if(this.root===null){
//  this.root=this.min(t.right)
//}
