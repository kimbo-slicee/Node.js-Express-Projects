const {CustomError} = require("../Errors/CustomError");

const errorHandlerMiddleware=(err,req,res)=>{
    if(err instanceof CustomError){
        return  res.status(err.status).json({msg:err.message});
    }
    return res.status(500).json({msg:"Internal Server Error"});
};
module.exports=errorHandlerMiddleware;