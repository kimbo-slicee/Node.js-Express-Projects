const asyncWrapper=async (callBack)=>{
    return async (err,req,res,next)=>{
        try{
          await callBack(err,req,res,next)
        }catch (error){
            next(err)
        }
    }
};
module.exports=asyncWrapper;