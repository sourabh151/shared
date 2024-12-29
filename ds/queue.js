const { doubleNode } = require("./node.js");
class queue {
  head = null;
  tail = null;
  t = null;
  push(v) {
    //if (v === null || v === undefined) {
    //  return null;
    //}
    this.t = new doubleNode(v);
    //console.log(this.t)
    if (this.head === null) {
      this.head = this.tail = this.t;
    }
    else {
      this.tail.right = this.t;
      this.t.left = this.tail;
      this.tail = this.t;
    }
    return this.t;
  }
  pop(v = null) {
    if (this.head === null) {
      return null;
    }
    if (v) {
      this.t = this.head;
      while (this.t != null) {
        if (this.t.val === v) {
          break;
        }
        this.t = this.t.right;
      }
      if (this.t === null) {
        return null;
      }
      this.t.left.right = this.t.right;
      this.t.right.left = this.t.left;
      //this.t = this.t.val;
    }
    else {
      this.t = this.head;
      this.head = this.head.right;
      //this.t = this.t.val;
    }
    return this.t;
  }
  print() {
    this.t = this.head;
    console.log("_________________print___start_________________________");
    while (this.t != null) {
      console.log(this.t.val);
      this.t = this.t.right;
    }
    console.log("_________________print___end____________________________");
  }
  constructor(v) {
    if (v)
      this.push(v);
  }
}
module.exports = queue;

//if ((typeof (v) === "object") || (typeof (v) === "string")) {
//  for (let e of v) {
//    this.push(e)
//  }
//}
//else {
//  this.push(v)
//}
