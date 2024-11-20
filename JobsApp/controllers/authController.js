const {StatusCodes}=require("http-status-codes");
const User=require("../models/user")
const register=async (req,res)=>{
    const user = await User.create({...req.body});
    const token=user.createJWT();
    res.status(StatusCodes.CREATED).json({name:user.getName(),token});
}
const login= async (req,res)=>{
    res.status(200).send("<h1>LOGIN</h1>")

}
module.exports={
    register,
    login
}