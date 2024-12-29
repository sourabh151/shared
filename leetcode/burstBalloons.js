const a = [3, 1, 5, 8];
class node{
  value;
  left=null;
  right=null;
  constructor(v){
    this.value = v;
  }
  push(v){

  }
  pop(v){
    while(h!=null){
      if(h.value == v){
        h.left.right = h.right;
        h.right.left = h.left;
        return h;
      }
      h = h.right;
    }
  }
}

function burst(nums) {
  //let i, nc = [], a, c, max = [];
  let i,a,b,c,h=null,e = null,t = null;
  for (i = 0; i < nums.length; i++) {
    a = i > 0 ? nums[i - 1] : 1;
    b=nums[i];
    c = i < (nums.length - 1) ? nums[i + 1] : 1;
    //nc.push((a * c));
    if(h == null){
      h = new node(a*c);
      e = h;
    }
    else{
      e.right = new node(a*c);
      t = e;
      e = e.right;
      e.left = t;
    }
  }
  while(h!=null){
    console.log(h.value);
    h = h.right;
  }
  console.log(node.prototype.pop())
}
burst(a);

//for(i=0;i<nc.length;i++){
//  if(max.length == 0){
//    max.push(i)
//  }
//  else{
//    console.log(nc[i],nc[max[max.length-1]])
//    if(nc[i] == nc[max[max.length-1]]){
//      max.push(i);
//    }
//    else{
//      if(nc[i]>nc[max[max.length-1]]){
//        max = [];
//        max.push(i);
//      }
//    }
//  }
//}
//console.log(max);
