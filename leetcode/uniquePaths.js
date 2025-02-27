function unique(m, n) {
  let memo = new Map();
  memo.set((m * n), 1);
  function run(i, j) {
    let pos = ((j * m) - (m - i));
    // console.log("at => " + pos)
    let x = 0, y = 0;
    if (memo.has(pos)) {
      // console.log("memoized return => " + memo.get(pos))
      return memo.get(pos)
    }
    else {
      if (i < m) {
        x = run(i + 1, j)
      }
      if (j < n) {
        y = run(i, j + 1)
      }
      let r = x + y;
      memo.set(pos, r);
      // console.log("calculated return => " + memo.get(pos))
      return r;
    }
  }
  let res = run(1, 1);
  // console.log(memo)
  return res;
}
console.time("first");
console.log(unique(100,100, 3))
console.timeEnd("first");

function uniqueTwo(m, n) {
  let a = new Array(m - 1).fill(1);
  let i, j;
  let right;
  for (i = 0; i < (n - 1); i++) {
    for (j = 0; j < a.length; j++) {
      if (j == 0) {
        right = 1;
      }
      else {
        right = a[j - 1];
      }
      a[j] += right;
    }
  }
  return a[a.length - 1];
}
console.time("second");
console.log(uniqueTwo(100,100, 3))
console.timeEnd("second");

//complete
