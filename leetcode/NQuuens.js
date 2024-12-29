let r = new Set();
function NQueens(n) {
  let s = new Set();
  let size = n * n;
  for (let i = 0; i < size; i++) {
    s.add(i);
  }
  place(s, new Array(), n);
  
  //s.delete
  return r;
}
function place(squares, board, n) {
  if (squares.size < 1)
    return;
  //let exit = false;
  //r.forEach((item)=>{
  //  exit = board.isSubsetOf(item) && ((board.size + 1) === n);
  //  if(exit){
  //    console.log(board,item)
  //  }
  //  return;
  //});
  //if(exit)
  //  return;
  squares.forEach((v) => {
    let row = Math.floor(v / n);
    let col = v % n;
    let i = 0;
    let pos;
    let sd = new Set(squares);
    let bd = Array.from(board);
    for (i; i < n; i++) {
      pos = (n * row) + i;
      sd.delete(pos);
    }
    for (i = 0; i < n; i++) {
      pos = (n * i) + col;
      sd.delete(pos);
    }
    let rowD = row - 1;
    let colD = col - 1;
    while (rowD >= 0 && colD >= 0) {
      pos = (rowD * n) + colD;
      sd.delete(pos);
      rowD--;
      colD--;
    }
    rowD = row - 1;
    colD = col + 1;
    while (rowD >= 0 && colD < n) {
      pos = (rowD * n) + colD;
      sd.delete(pos);
      rowD--;
      colD++;
    }
    rowD = row + 1;
    colD = col + 1;
    while (rowD <= n && colD <= n) {
      pos = (rowD * n) + colD;
      sd.delete(pos);
      rowD++;
      colD++;
    }
    rowD = row + 1;
    colD = col - 1;
    while (rowD < n && colD >= 0) {
      pos = (rowD * n) + colD;
      sd.delete(pos);
      rowD++;
      colD--;
    }
    bd.push(v);
    if (bd.length === n) {
      bd.sort();
      //let bdd = new Set(bd);
      r.add(bd.toString())
      return;
    }
    //console.log(v, sd,bd)
    place(sd, bd, n);
    return;
  })
}
console.log(NQueens(7));
console.log(r.size)
