const asyncWrapper=require('../middlewares/asyncWrapper')
const product=require("../models/product");
const getAllProducts= async (req,res)=>{
    const products= await product.find({});
    res.status(200).json({success:true,data:products,ngHits:products.length });
}
const getProduct= async (req,res)=>{
    const products= await product.find(req.query);
    res.status(200).json({products,ngHits:products.length});

}
module.exports={
    getAllProducts,
    getProduct
}
