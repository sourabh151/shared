class rangeSum {
  constructor(m) {
    this.m = m;
    this.n = new Array(m.length);
    for (let i = 0; i < this.n.length; i++) {
      this.n[i] = new Array(this.m[0].length);
    }
    for (let i = 0; i < this.n.length; i++) {
      let s = 0;
      for (let j = 0; j < this.n[0].length; j++) {
        s += this.m[i][j];
        this.n[i][j] = s;
      }
    }
  }
  sumRegion = (a, b, x, y) => {
    let sum = 0;
    while (a <= x) {
      sum += this.n[a][y];
      sum = b == 0 ? sum : sum - this.n[a][b - 1];
      a++;
    }
    return sum;
  }
}
const r = new rangeSum(
  [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ]
)
console.log(r.sumRegion(2, 0, 4, 3))
