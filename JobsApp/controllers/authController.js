
const {StatusCodes}=require("http-status-codes");
const User=require("../models/user")
// register methode to create user in mongoose DB
const register=async (req,res)=>{
    const user = await User.create({...req.body})
 res.status(StatusCodes.CREATED).json({user});
}
const login= async (req,res)=>{
    res.status(200).send("<h1>LOGIN</h1>")

}
module.exports={
    register,
    login
}