const {CustomError} = require("../Errors");
const {INTERNAL_SERVER_ERROR} = require("http-status-codes");

const errorHandlerMiddleware=(err,req,res)=>{
    if(err instanceof CustomError){
        return  res.status(err.status).json({msg:err.message});
    }
    return res.status(INTERNAL_SERVER_ERROR).json({msg:"Internal Server Error"});
};
module.exports=errorHandlerMiddleware;