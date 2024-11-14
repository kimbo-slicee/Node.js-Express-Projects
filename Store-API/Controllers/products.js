const asyncWrapper=require('../middlewares/asyncWrapper')
const product=require("../models/product");
const getAllProducts= async (req,res)=>{
    //using mongoose filtering by reading query;
    // const {name,page}=req.query;
    // const obj={};
    // if(name) obj.name=name;
    const products= await product.find({page:'2'});
    res.status(200).json({success:true,data:products,ngHits:products.length });
}
const getProduct= async (req,res)=>{
    const {featured,company,name,sort} =req.query;
    const queryObject={};
    if(featured ){
        queryObject.featured=featured === "true";
    }
    if(company){
        queryObject.company=company;
    }
    if(name){
        queryObject.name={$regex:name,$options:'i'};//using regex to 
    }
    const products= await product.find(queryObject);
    res.status(200).json({products,ngHits:products.length});

}
module.exports={
    getAllProducts,
    getProduct
}
