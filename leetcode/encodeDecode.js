function encode(s){
  let r = "";
  let cc;
  for(let i = 0;i<s.length;i++){
    cc = s.charCodeAt(i);
    cc = cc>127?cc-128:cc+128;
    r+=String.fromCharCode(cc);
  }
  console.log(r)
  return r;
}
function decode(s){
  let r = "";
  let cc;
  for(let i = 0;i<s.length;i++){
    cc = s.charCodeAt(i);
    cc = cc>127?cc-128:cc+128;
    r+=String.fromCharCode(cc);
  }
  return r;
}
console.log(decode(encode("⁵→┐πΣ<F4>φγσ")));
