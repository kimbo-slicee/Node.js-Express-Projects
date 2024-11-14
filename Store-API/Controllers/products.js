const asyncWrapper=require('../middlewares/asyncWrapper')
const product=require("../models/product");
const getAllProducts= async (req,res)=>{
    //using mongoose filtering by reading query;
    // const {name,page}=req.query;
    // const obj={};
    // if(name) obj.name=name;
    const products= await product.find({}).sort('name').limit(10);
    res.status(200).json({success:true,data:products,ngHits:products.length });
}
const getProduct= async (req,res)=>{
    const {featured,company,name,sort} =req.query;
    const queryObject={};
    if(featured ) queryObject.featured=featured === "true";
    if(company) queryObject.company=company;
    if(name) queryObject.name={$regex:name,$options:'i'};//using regex to
    let result=  product.find(queryObject);
    if(sort) {
        const sortList = sort.split(',').join(' ')
        result=result.sort(sortList);
    }else {
        result=result.sort('createAt');
    }
    let products=await result;
    res.status(200).json({products,ngHits:products.length});

}
module.exports={
    getAllProducts,
    getProduct
}
