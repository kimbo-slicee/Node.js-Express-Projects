class CustomError extends Error{
    constructor(message,status) {
        super(message);
        this.status=status;

    }
}
const createCustomErrorInstance=(message,status)=>{
   return  new CustomError(message,status)
}
module.exports= {
    CustomError,
    createCustomErrorInstance
};