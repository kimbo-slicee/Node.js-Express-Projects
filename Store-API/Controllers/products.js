const asyncWrapper=require('../middlewares/asyncWrapper')
const product=require("../models/product");
const getAllProducts= async (req,res)=>{
    res.status(200).json({success:true,mgs:"API GET ALL PRODUCTS WORKS"})
}
const getProduct= async (req,res)=>{
    res.status(200).json({success:true,mgs:"API GET ONE PRODUCTS WORKS"})

}
module.exports={
    getAllProducts,
    getProduct
}
