const { singleNode } = require("./node.js");
class linkedList {
  head = null;
  current = null;
  trmp = null
  constructor(val) {
    if (val) {
      this.push(val)
    }
  }
  push(val) {
    if (this.head === null) {
      this.head = new singleNode(val);
      this.current = this.head;
    }
    else {
      this.current.next = new singleNode(val);
      this.current = this.current.next;
    }
    return this.current.val;
  }
  pop(val = null) {
    this.temp = this.head;
    if(this.head === null){
      return null;
    }
    if (!val) {
      this.head = this.head.next;
      this.temp = this.temp.val;
      return this.temp;
    }
    else {
      let prev = null;
      while (this.temp != null) {
        if (this.temp.val === val) {
          if (this.temp === this.head) {
            this.head = null;
            prev = this.head;
          }
          else {
            prev.next = this.temp.next;
          }
          return temp.val;
        }
        prev = this.temp;
        this.temp = this.temp.next;
        return this.temp;
      }
    }
    return null;
  }
}
const ll = new linkedList();
console.log(ll.push(2));
console.log(ll.push(33));
console.log(ll.head);
console.log(ll.pop());
console.log(ll.pop());
console.log(ll.pop());
module.exports = linkedList;
