function maxChunks(arr) {
  let i;
  let s = 0, li, ln, hn;
  li = ln = hn = null;
  for (i = 0; i < arr.length; i++) {
    if (li == null) {
      li = i;
      ln = hn = arr[i];
    }
    else {
      hi = i;
      ln = ln < arr[i] ? ln : arr[i];
      hn = hn > arr[i] ? hn : arr[i];
    }
    if ((li == ln) && (i == hn)) {
      s++;
      li = ln = hn = null;
    }
  }
  s = s == 0 ? 1 : s;
  return s;
}

console.log(maxChunks([4, 3, 0, 1, 2,5,6,8,7]));
