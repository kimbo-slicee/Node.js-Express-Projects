const {NOT_FOUND} = require("http-status-codes");
const notFound=(req,res)=>{
    res.status(NOT_FOUND).send("Page Note Found");
};
module.exports=notFound;