class rangeSum {
  constructor(m) {
    this.n = m;
    this.row = this.n.length;
    this.col = this.n[0].length;
    this.dirRow = false;
    this.sum = 0;
    if (this.col > this.row)
      this.dirRow = true;
    if (this.dirRow) {
      for (let i = 0; i < this.row; i++) {
        this.sum = 0;
        for (let j = 0; j < this.col; j++) {
          this.sum += this.n[i][j];
          this.n[i][j] = this.sum;
        }
      }
    }
    else {
      for (let i = 0; i < this.col; i++) {
        this.sum = 0;
        for (let j = 0; j < this.row; j++) {
          this.sum += this.n[j][i];
          this.n[j][i] = this.sum;
        }
      }
    }
  }
  //
  sumRegion = (a, b, x, y) => {
    this.sum = 0;
    if (this.dirRow) {
      while (a <= x) {
        this.sum += this.n[a][y];
        this.sum = b == 0 ? this.sum : this.sum - this.n[a][b - 1];
        a++;
      }
    }
    else {
      while (b <= y) {
        this.sum += this.n[x][b];
        this.sum = a == 0 ? this.sum : this.sum - this.n[a - 1][b];
        b++;
      }
    }
    return this.sum;
  }
  //
  update = (a, b, v) => {
    let o = this.n[a][b];
    if (this.dirRow) {
      o -= b === 0 ? 0 : this.n[a][b - 1];
      v -= o;
      while (b < this.col) {
        this.n[a][b] += v;
        b++;
      }
    }
    else {
      o -= a === 0 ? 0 : this.n[a - 1][b];
      v -= o;
      while (a < this.row) {
        this.n[a][b] += v;
        a++;
      }
    }
  }
}
// const r = new rangeSum(
//   [
//     [3, 0, 1, 4, 2],
//     [5, 6, 3, 2, 1],
//     [1, 2, 0, 1, 5],
//     [4, 1, 0, 1, 7],
//     [1, 0, 3, 0, 5],
//     [2, 3, 4, 5, 6]
//   ]
// )
// console.log(r.n)
// console.log(r.sumRegion(0,0,2,2))
// r.update(2, 2, 9);
// console.log(r.n)
//complete
class randomArray {
  constructor(i, j) {
    this.max = 1000;
    this.maxValue = 10;
    this.row = i ? i : Math.ceil(Math.random() * this.max);
    this.col = j ? j : Math.ceil(Math.random() * this.max);
    this.a = new Array(this.row);
    for (let i = 0; i < this.row; i++) {
      this.a[i] = new Array(this.col);
    }
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        this.a[i][j] = Math.ceil(Math.random() * this.maxValue)
      }
    }
    return this.a;
  }
}
// let a = new randomArray();
// console.log(a)
const r = new rangeSum(new randomArray(100,3));
console.log(r.sumRegion(0,0,99,2))
console.log(r.n)
