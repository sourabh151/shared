const maxHeap = require('./maxHeap');

function rl(s, repeatLimit) {
  const h = new maxHeap(s);
  let a = [];
  let c;
  while ((c = h.pop()) != null) {
    if (a.length == 0) {
      a.push([c, 1]);
    }
    else {
      if (a[a.length - 1][0] == c) {
        a[a.length - 1][1]++;
      }
      else {
        a.push([c, 1]);
      }
    }
  }
  //console.log(a);
  let r = '', current = 0, l = 0, high = repeatLimit;
  while (a != null) {
    if (current == a.length)
      break;

    r += a[current][0];
    a[current][1]--;

    if (a[current][1] == 0) {
      if (current == 0) {
        a.shift();
      }
      else {
        a[1] = a[0];
        a.shift();
        current = 0;
        high = repeatLimit;
      }
      l = -1;
    }


    l++;
    if (l == high) {
      l = 0;
      high = high == repeatLimit ? 1 : repeatLimit;
      current = current == 0 ? 1 : 0;
    }
  }
  return r;
}
console.log(rl("abcxvvmzzddzzzlxxy", 3));
//repeatLimit("cczazcc",3);
