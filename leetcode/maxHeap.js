const a = [[1, 2], [3, 5], [7, 9]];
const b =['c','a','b']
class maxHeap {
  heap = [null];
  push(e) {
    console.log(typeof (e));
    this.heap.push(e);
    let i = this.heap.length - 1;
    if (i > 1) {
      if (typeof (this.heap[i]) == "object") {
        while (this.heap[i][0] > this.heap[Math.floor(i / 2)][0]) {
          [this.heap[i], this.heap[Math.floor(i / 2)]] = [this.heap[Math.floor(i / 2)], this.heap[i]];
          i = Math.floor(i / 2);
          if (i == 1)
            break;
        }
      }
      else {
        while (this.heap[i] > this.heap[Math.floor(i / 2)]) {
          [this.heap[i], this.heap[Math.floor(i / 2)]] = [this.heap[Math.floor(i / 2)], this.heap[i]];
          i = Math.floor(i / 2);
          if (i == 1)
            break;
        }
      }
      //console.log(this.heap)
    }
  }
  pop() {
    let i = this.heap.length - 1;
    if (i == 0) {
      return null;
    }
    else if (i == 1) {
      return this.heap.pop();
    }
    else {
      //[this.heap[1],this.heap[i]] = [this.heap[i],this.heap[1]];
      let i = 1;
      let a, b;
      let r = this.heap[i];
      //console.log("pop start : " + this.heap);
      this.heap[i] = this.heap.pop();
      a = (i * 2);
      a = a < this.heap.length ? a : null;
      b = (i * 2) + 1;
      b = b < this.heap.length ? b : null;
      while (true) {
        //console.log(this.heap);
        //console.log(i,a,b)
        if ((a == null && b == null))
          break;
        else if (b == null) {
          if (this.heap[a] < this.heap[i])
            break;
          [this.heap[i], this.heap[a]] = [this.heap[a], this.heap[i]];
          i = a;
          a = (i * 2);
          a = a < this.heap.length ? a : null;
        }
        else {
          let max = this.heap[a] > this.heap[b] ? a : b;
          //console.log("max : ", this.heap[max])
          if (this.heap[i] > this.heap[max])
            break;
          [this.heap[i], this.heap[max]] = [this.heap[max], this.heap[i]];
          i = max;
          a = (i * 2);
          a = a < this.heap.length ? a : null;
          b = (i * 2) + 1;
          b = b < this.heap.length ? b : null;
        }
      }
      //console.log("pop end : " + this.heap);
      return r;
    }
  }

  insert(a) {
    if (typeof (a) == "object" || typeof (a) == "string") {
      for (let e of a) {
        this.push(e);
      }
    }
    else {
      this.push(a);
    }
  }
  constructor(a) {
    this.insert(a);
  }

}
let t1 = new maxHeap(a);
let t2 = new maxHeap(b);
console.log(t1.heap);
console.log(t2.heap);
module.exports = maxHeap;
//
//const main = () => {
//  let t1 = new Heap(a);
//  console.log(t1.heap);
//  console.log(t1.pop());
//  console.log(t1.pop());
//  console.log(t1.pop());
//  console.log(t1.pop());
//  console.log(t1.pop());
//  console.log(t1.pop());
//  console.log(t1.pop());
//  console.log(t1.heap);
//}
//main();
////function createHeap(a){
////  const s = Math.ceil(Math.log2(a.length));
////  let c = new Array(s).fill(null);
////
////}
