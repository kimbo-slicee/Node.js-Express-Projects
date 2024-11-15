class CustomAPIError extends Error{
    constructor(message,status) {
        super(message); // invoke parent class constructor
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