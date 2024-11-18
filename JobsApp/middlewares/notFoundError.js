const notFoundError=(err,req,res,next)=>res.status(404).json({msg:"Route Note Found "});
module.exports=notFoundError;