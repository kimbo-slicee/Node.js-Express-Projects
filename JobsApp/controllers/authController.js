const {StatusCodes, }=require("http-status-codes");
const {BadRequestError, UnauthenticatedError} = require("../errors");
const User=require("../models/user")
const register=async (req,res)=>{
    const user = await User.create({...req.body});
    const token=user.createJWT();
    res.status(StatusCodes.CREATED).json({name:user.getName(),token});
}
const login= async (req,res)=>{
    const {email,password}=req.body ;
    if(!email || !email){
    throw new BadRequestError("Please Provide email and Password ")
    }
    const user =await User.findOne({email});
    if(!user) throw new UnauthenticatedError("Invalid Credentials ");
    // compare password
    const isPasswordValid =user.comparePassword(password);
    if(!isPasswordValid) throw new UnauthenticatedError("Invalid Credentials");
    const token =user.createJWT();
    res.status(200).json({user:user.getName(),token:token});
}
module.exports={
    register,
    login
}