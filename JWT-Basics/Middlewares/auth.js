const jwt = require('jsonwebtoken');
const {unauthenticated} = require("../Errors");

const authMiddleware=async (req,res,next)=>{
const authHeader=req.headers.authorization;// await function but im using express-async-handler package
if(!authHeader || !authHeader.startsWith('userEmail')){
throw new unauthenticated("NO TOKEN PROVIDED")// create new CustomError instance with status 401
}else{
    const token=authHeader.split(' ')[1];// split username formToken ID
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRITE);
        const {id,userEmail }=decoded;
        console.log(id,userEmail);
        req.user={id,userEmail};
    }catch(error){
        throw new unauthenticated("NOT AUTHORIZED TO ACCESS THIS ROUTE")// create new CustomError instance with status 401

    }
    next();
}



}
module.exports=authMiddleware;