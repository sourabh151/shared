const log2 = (req,res,next)=>{
    console.log("IN 2");
    next('route');
}
module.exports = log2;