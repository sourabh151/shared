const log3 = (req,res,next)=>{
    console.log("IN 3");
    next();
}
module.exports = log3;