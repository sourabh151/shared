//class Node {
//  id;
//  N = new Map();
//  constructor(i) {
//    this.id = i;
//  }
//  hasNeighbor(i) {
//    return this.N.has(i);
//  }
//  addNeighbor(i, d) {
//    this.N.set(i, d);
//  }
//}
class Graph {
  //reg = /([A-Za-z]+):([([A-Za-z]+)\/(\d+)]*)/;
  all = new Map();
  reg = /([A-Za-z]+)\/(\d+)+/g;
  constructor(a) {
    for (let e of a) {
      let s = e.split(":");
      if (!this.all.has(s[0])) {
        this.all.set(s[0], new Map());
      }
      let m = s[1].matchAll(this.reg)
      for (let i of m) {
        //if neighbor does not already exists
        if (!this.all.has(i[1])) {
          let n = new Map();
          n.set(s[0], i[2]);
          this.all.set(i[1], n);
        }
        this.all.get(s[0]).set(i[1], i[2]);
      }
    }
  }
  add(s) {
    let a = s.split(":");
    this.all.set(a[0], new Map());
    let m = a[1].matchAll(this.reg)
    for (let i of m) { 
      if(!this.all.has(i[1])){
        this.all.set(i[1],new Map())
      }
      this.all.get(a[0]).set(i[1],i[2]);
      this.all.get(i[1]).set(a[0],i[2]);
    }
  }
  AStar(a,z){
    //
  }
}
let g = new Graph([
  "A:E/1,G/3",
  "B:E/2",
  "C:D/5,F/1",
  "D:C/5",
  "E:A/1,B/2,F/1,H/2,G/3",
  "F:C/1,E/1",
  "G:A/3,E/3",
  "H:E/2"
])
g.add("I:A/7,D/3")
console.log(g.all)
