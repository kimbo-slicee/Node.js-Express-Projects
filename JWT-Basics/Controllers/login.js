// check email and password
// if exist create JWT
// send back to Front-End
const jwt=require('jsonwebtoken');
const {badRequest} = require("../Errors");
const login =async (req, res)=>{
    const{email, password}=req.body;
    //mongoose check
    // Joi
    // check in the controller;
    if(!email || !password){
            throw new badRequest ("please provide Email or Password");
    }
    const userId=new Date().getUTCFullYear();
    const token=jwt.sign({id:userId,userEmail:"userEmail"},process.env.JWT_SECRITE,{expiresIn: '30d'})
    res.status(200).json({mes:"login",token});
}
const dashboard=async (req,res)=>{
            const random=Math.floor(Math.random()*100);
            res.status(200).json({msg:`${req.user.userEmail}`,secret:`Here is Your auth Data, ${random}`})
    }

module.exports={
    login,
    dashboard
}