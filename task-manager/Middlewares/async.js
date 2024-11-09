/**
 * Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
 *  */
const asyncWrapper=(callBack)=>{
return async (req,res,next)=>{
    try{
        await callBack(req,res,next);
    }catch (error){
        next(error);
    }
}
}
module.exports=asyncWrapper