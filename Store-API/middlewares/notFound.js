const noteFoundPage=(err,req,res)=>{
    return res.status(404).json({success:false,msg:"PAGE NOT FOUND 404"})
}
module.exports=noteFoundPage;