const {CustomError} = require("../errors/CustomError");
const {StatusCodes}=require("http-status-codes")
const errorHandler=(err,req,res)=>{
    if(err instanceof CustomError) return res.status(err.status).json({msg:err.message})
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err});

}
module.exports=errorHandler;