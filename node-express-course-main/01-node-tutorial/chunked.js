const http = require('http')
const fs = require('fs')

function outer(){
  let i = 0;
  return function inner(){
    return ++i;
  }
}

http.createServer((req,res)=>{
  const stream = fs.createReadStream('./content/big.txt');
  stream.on('error',(err)=>{
    res.end(err);
  });
  const count = outer();
  stream.on('open',()=>{
    stream.pipe(res);
  })
  stream.on('data',(chunk)=>{
    if((count()%2)==0){
      console.time();
    }
    else{
      console.timeEnd();
    }
  })
  }).listen(5000);