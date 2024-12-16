function transpose(a){
  let t;
  console.table(a);
  for(let i = 0;i<a.length;i++){
    //console.log("i: "+i);
    for(let j = 0;j<i;j++){
      t = a[i][j];
      a[i][j] = a[j][i];
      a[j][i] = t;
    }
  }
  console.table(a);
}
transpose([[1,2,3],[4,5,6],[7,8,9],[1,4,7]])
