const {readFile} = require('fs');

function getText (path){
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }
            resolve(data);
        })
    })
}
module.exports = getText;