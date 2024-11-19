const {StatusCodes}=require("http-status-codes");
const {BadRequestError}=require("../errors")
const bcrypt=require("bcryptjs")
const User=require("../models/user")
// register methode to create user in mongoose DB
const register=async (req,res)=>{
    //OPTIONAL
    // const {name,email,password}=req.body;
    // if (!name || !name.trim() || !email || !email.trim() || !password || !password.trim()) {
    //     throw new BadRequestError("Please check your inputs. All fields are required.");
    // }
    const {name,email,password}=req.body;
    const salt =await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    const temptUser={name,email,password:hashedPassword}
    const user = await User.create({...temptUser});
    res.status(StatusCodes.CREATED).json({user});
}
const login= async (req,res)=>{
    res.status(200).send("<h1>LOGIN</h1>")

}
module.exports={
    register,
    login
}