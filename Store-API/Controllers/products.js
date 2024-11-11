const asyncWrapper=require('../middlewares/asyncWrapper')

const getAllProducts=asyncWrapper(async (err,req,res,next)=>{
res.status(200).json({msg:"product testing routes"})
})
const getProduct=asyncWrapper(async (err,req,res,next)=>{
    res.status(200).json({msg:"product testing routes"})

})
module.exports={
    getAllProducts,
    getProduct
}
