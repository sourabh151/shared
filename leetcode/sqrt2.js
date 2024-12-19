function getNum(n) {
  let p,c,a,e;
  p = n.length - 1;
  a = 0;
  for (e of n) {
    c = 1;
    while (c <= p) {
      e *= 10;
      c++;
    }
    a += e;
    p--;
  }
  return a;
}
function sqrt(x) {
  let d = 0, xc = x, i, num;
  while (xc > 0) {
    xc = Math.round(xc / 10);
    d++;
  }
  console.log(d)
  d = Math.ceil(d / 2);
  let n = new Array(d).fill(0);
  n[0] = 1;
  console.log(n)
  for (i = 0; i < n.length; i++) {
    while (true) {
      num = getNum(n);
      if ((num * num) < x) {
        n[i]++;
      }
      else {
        n[i]--;
        break;
      }
    }
  }
  return getNum(n);
}
console.log(sqrt(345678));

//p = n.length - 1;
//c = 1;
//a = 0;
//for(e of n){
//  while(c<=p){
//    e*=10;
//    c++;
//  }
//  a+=e;
//  p--;
//}
//if()
