const {UNAUTHORIZED}=require("http-status-codes");
const {CustomError}=require("./CustomError")

class Unauthenticated extends CustomError{
    constructor(message) {
        super(message);
        this.status=UNAUTHORIZED;
    }
}
module.exports=Unauthenticated;
