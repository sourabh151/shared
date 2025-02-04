class Graph {
  constructor(n, c) {
    let all = new Map();
    for (let e in n) {
      console.log(e,n[e]);
      all.set(e)
    }
    for (let e in c) {
      //console.log(e);
    }
  }
}
let g = new Graph({
  "A": [2, 3],
  "B": [5, 7]
},
  {
    "A": ["B"],
    "B": ["A"]
  })
