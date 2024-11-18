class CustomError extends Error{
    constructor(message,statusCode) {
        super(message);
        this.status=statusCode;
    }
}
const customErrorInstance=(message,statusCode)=>{
    return new CustomError(message,statusCode)
    }
module.exports={
    CustomError,
    customErrorInstance
}