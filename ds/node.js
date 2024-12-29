class singleNode {
  val;
  next;
  constructor(v, n) {
    this.val = v === undefined ? 0 : v;
    this.next = n === undefined ? null : n;
  }
}
class doubleNode {
  val;
  left;
  right;
  constructor(v, l, r) {
    this.val = v === undefined ? 0 : v;
    this.left = l === undefined ? null : l;
    this.right = r === undefined ? null : r;
  }
}
module.exports = {singleNode,doubleNode};
