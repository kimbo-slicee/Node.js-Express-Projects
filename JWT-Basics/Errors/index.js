const {CustomError}=require("./CustomError");
const unauthenticated =require("./unauthenticated");
const badRequest=require("./bad-request");
module.exports={
    CustomError,
    unauthenticated,
    badRequest
}