const { singleNode } = require("./node.js")
class hashMap {
  m = [];
  t;
  constructor(size = 10) {
    for (this.t = 0; this.t < size; this.t++) {
      this.m.push(null);
    }
    //console.log(this.m)
  }
  getHash(k) {
    let r = 0;
    if (typeof (k) === "string") {
      for (this.t = 0; this.t < k.length; this.t++) {
        r += k.charCodeAt(this.t);
      }
      return r;
    }
    else {
      return k;
    }
  }
  set(k, v) {
    this.t = this.getHash(k) % this.m.length;
    //console.log(this.t)
    if (this.m[this.t] == null) {
      this.m[this.t] = new singleNode([k, v]);
      return this.m[this.t].val[1];
    }
    else {
      this.t = this.m[this.t];
      while (this.t.next !== null) {
        if (this.t.val[0] === k) {
          return null;
        }
        this.t = this.t.next;
      }
      if (this.t.val[0] === k) {
        return null;
      }
      this.t.next = new singleNode([k, v]);
      return this.t.next.val[1];
    }
  }
  print() {
    console.log(this.m);
  }
  has(k) {
    this.t = this.m[(this.getHash(k) % this.m.length)]
    while (this.t != null) {
      if (this.t.val[0] === k) {
        return true;
      }
      this.t = this.t.next;
    }
    return false;
  }
  get(k){
    this.t = this.m[this.getHash(k) % this.m.length];
    while(this.t!==null){
      if(this.t.val[0]===k){
        return this.t.val[1];
      }
      this.t=this.t.next;
    }
    return null;
  }

}
module.exports = hashMap;
//let a = new hashMap(30);
//a.set("sahil", 23);
//a.set("sourabh", 35);
//a.set("s",7)
//a.set("t",3)
//a.set("u",4)
//a.set("v",5)
//a.set("j",99)
//console.log(a.get("sahil"))
//a.print()
