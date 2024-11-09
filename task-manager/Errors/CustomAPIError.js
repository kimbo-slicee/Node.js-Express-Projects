/**
 * Error objects are thrown when runtime errors occur.
 * The Error object can also be used as a base object for user-defined
 * exceptions. See below for standard built-in error types.
 * */
class CustomAPIError extends Error{
    constructor(message,status) {
        super(message);
        this.status=status;
    }
}
const creatAPIErrorInstance=(message,status)=>{
    return new CustomAPIError(message,status);

}
module.exports={
    CustomAPIError,
    creatAPIErrorInstance
}
