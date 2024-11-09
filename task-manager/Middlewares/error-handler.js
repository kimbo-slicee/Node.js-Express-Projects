const errorHandlerMiddleware=(err,req,res,next)=>{
return res.status(500).json({mdg:err});
};
module.exports=errorHandlerMiddleware