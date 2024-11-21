const {UnauthenticatedError} = require("../errors");
const {verify} = require("jsonwebtoken");
const authMiddleware= ((err, req, res, next) => {
 const authHeader=req.headers.authorization;
 if(!authHeader || !authHeader.startsWith("username ")){
    throw new UnauthenticatedError("Authentication in Valid");
 }
 const token =authHeader.split(" ")[1];
 try {
     const payload=verify(token,process.env.JWT_SECRETE);
     req.user={userId:payload.userID,role:payload.role}
     next();
 }catch (error){
        throw new UnauthenticatedError("Authentication in Valid");
 }
});
module.exports=authMiddleware;