const a = [3, 1, 2, 5, 6, 4];
class Heap {
  insert(e) {
    console.log(this.size)
  }
  constructor(a) {
    this.heap = null;
    this.size = 0;
    this.i = 0;
    if (typeof (a) == "object") {
      this.size = Math.ceil(Math.log2(a.length));
      this.heap = new Array(this.size).fill(null);
      for (let e of a) {
        insert(e);
      }
    }
    else {
      this.size = 1;
      insert(a);
    }
  }

}

const main = () => {
  let t1 = new Heap(a);
  let t2 = new Heap(3);
}
main();
//function createHeap(a){
//  const s = Math.ceil(Math.log2(a.length));
//  let c = new Array(s).fill(null);
//
//}
