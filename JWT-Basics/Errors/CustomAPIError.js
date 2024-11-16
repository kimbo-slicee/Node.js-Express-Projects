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