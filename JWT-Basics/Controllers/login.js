// check email and password
// if exist create JWT
// send back to Front-End
const {CustomAPIError} = require("../Errors/CustomAPIError");
const jwt=require('jsonwebtoken');
const login =async (req, res,next)=>{
    const{email, password}=req.body;
    //mongoose check
    // Joi
    // check in the controller;
    if(!email || !password){
        throw new CustomAPIError ("please provide email or password",400);
    }
    const userId=new Date().getUTCFullYear();
    const token=jwt.sign({id:userId},process.env.JWT_SECRITE,{expiresIn: '30d'})
    res.status(200).json({mes:"login",token});
}
const  dashboard=async (req,res,next)=>{
    const authToken=req.headers.Authorization;
    // console.log(authToken);
    if(!authToken || authToken.headers.startWith('username')){
        const error=new CustomAPIError("Token not valid ",401);
        next(error);
        // throw  new CustomAPIError("Token not valid ",401)
        const token=authToken.split(' ')[1];
        try{
           const encoded=jwt.verify(token,process.env.JWT_SECRITE);
            const random=Math.floor(Math.random()*100);
             res.status(200).json({msg:`Hello,Hello ${encoded}`,secret:`Here is Your auth Data, ${random}`})
        }catch(error){
            next(error);
        }
    }
    }
module.exports={
    login,
    dashboard
}