function singleNumber(nums){
  let s = new Set();
  let r;
  for(let e of nums){
    if(s.has(e)){
      s.delete(e);
    }
    else{
      s.add(e);
    }
  }
  s.forEach((v)=>{
    r = v;
  });
  return r;
}
console.log(singleNumber([1,3,5,5,3,7,9,1,9]))
