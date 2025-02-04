const jsonwebtoken = require("jsonwebtoken");
const BadRequestError = require("../errors/BadRequest-error");
const CustomAPIError = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");
// const jose = require("jose");

async function login(req,res){
    const {username,password} = req.body;
    console.log(username,password);
    
    if(!username || !password){
        throw new BadRequestError("please provide valid username and password");
    }
    const id = new Date().getTime();
    const token = jsonwebtoken.sign({id,username},process.env.JWT_SECRET_KEY,{
        expiresIn:"30 days",
    });
    console.log(jsonwebtoken.decode(token));
    
    // const alg = "HS256"
    // const token = await new jose.SignJWT({id,username})
    // .setProtectedHeader({alg})
    // .setIssuedAt()
    // .setExpirationTime("1h")
    // .sign(new TextEncoder().encode(process.env.JWT_SECRET_KEY));
    // const {payload , protectedHeader} = await jose.jwtVerify(token,new TextEncoder().encode("tara"));
    // console.log(payload,protectedHeader);
        
    if(!token){
        throw new CustomAPIError("failed to create token",StatusCodes.INTERNAL_SERVER_ERROR);
    }
    res.send({success:true,token:token});
}
module.exports = {login};