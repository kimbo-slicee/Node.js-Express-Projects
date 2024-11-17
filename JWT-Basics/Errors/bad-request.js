const {CustomError} = require("./CustomError");
const {BAD_REQUEST}=require("http-status-codes")
class BadRequest extends CustomError{
    constructor(message) {
        super(message);
        this.status=BAD_REQUEST;
    }
}
module.exports=BadRequest