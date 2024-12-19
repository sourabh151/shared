let p = [2];
function prime(n){
  let l,isP;
  while(true){
    n+=1;
    l = n%10;
    isP = true;
    if(l == 1 || l == 3 || l == 5 || l == 7 || l == 9){
      for(e of p){
        if((n%e) == 0){
          isP = false;
          break;
        }
      }
      if(isP){
        p.push(n);
        break;
      }
    }
  }
  return n;
}
let s = 2;
for (let i = 0; i < 50; i++) {
  s = prime(s);
  console.log(s);

  
}
function sqrt(x){
  let r,ps = 0;
  while(true){
    r = 0;
    r = x%p[p.length-1];
    if(r){

    }
  }
}

