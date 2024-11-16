// check email and password
// if exist create JWT
// send back to Front-End
const {CustomAPIError} = require("../Errors/CustomAPIError");
const login =async (req, res,next)=>{
    const{email, password}=req.body;
    //mongoose check
    // Joi
    // check in the controller;
    if(!email || !password){
        // throw new CustomAPIError ("please provide email or password",400);
    }
 res.send("Fake Login/Register/Signup Router");
}
const  dashboard=async (req,res)=>{
    const random=Math.floor(Math.random()*100);
     res.status(200).json({msg:"Hello,Hello ",secret:`Here is Your auth Data, ${random}`})
    }
module.exports={
    login,
    dashboard
}