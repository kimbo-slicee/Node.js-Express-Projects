/**
 * The default error handler
 * Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This
 * default error-handling middleware function is added at the end of the middleware function stack.
 * If you pass an error to next() and you do not handle it in a custom error handler, it will be handled by the built-in
 * error handler; the error will be written to the client with the stack trace. The stack trace is not included in the
 * production environment.
 *
 * */
const {CustomAPIError} = require("../Errors/CustomAPIError");

const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof CustomAPIError){
    return res.status(err.status).json({msg:err.message});
    }
    return res.status(500).json({msg:"Internal Server Error"});
};
module.exports=errorHandlerMiddleware