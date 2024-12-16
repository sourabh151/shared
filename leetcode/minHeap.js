const a = [3, 1, 2, 5, 6, 4];
class Heap {
  heap;
  level;
  i;
  insert(e) {
    console.log(e)
  }
  constructor(a) {
    if (typeof (a) == "object") {
      for (let e of a) {
        insert(e);
      }
    }
    else {
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
