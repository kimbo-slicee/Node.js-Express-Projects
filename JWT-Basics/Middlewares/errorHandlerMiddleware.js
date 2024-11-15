const {CustomAPIError} = require("../Errors/CustomAPIError");

const errorHandlerMiddleware=(err,req,res)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.status).json({msg:err.message});
    }
    return res.status(500).json({msg:"Internal Server Error"});
};
module.exports=errorHandlerMiddleware;