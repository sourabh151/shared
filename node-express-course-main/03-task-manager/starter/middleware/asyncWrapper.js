const asyncWrapper = (fc)=>{
    return async (req, res, next)=>{
        try{
            await fc(req, res, next)
        }catch(error){
            next(error)
        }
    }
}

module.exports = asyncWrapper;