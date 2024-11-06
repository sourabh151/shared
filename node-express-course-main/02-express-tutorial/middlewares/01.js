const log1 = (req,res,next)=>{
    console.log("IN 1");
    next();
}
module.exports = log1;