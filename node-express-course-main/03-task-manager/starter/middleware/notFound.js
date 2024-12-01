const notFound = (req,res)=>{
  res.status(404).json({msg:"invalid request"});
}
module.exports = notFound;
