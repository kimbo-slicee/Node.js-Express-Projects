const asyncWrapper=require('../middlewares/asyncWrapper')
const product=require("../models/product");
const {skipMiddlewareFunction} = require("mongoose");
const getAllProducts= async (req,res)=>{
    //using mongoose filtering by reading query;
    // const {name,page}=req.query;
    // const obj={};
    // if(name) obj.name=name;
    const products= await product.find({})
        .sort('name')
        .select('name price')
        .limit(10)
        .skip(2);
    res.status(200).json({success:true,data:products,ngHits:products.length });
}
const getProduct= async (req,res)=>{
    const {featured,company,name,sort,select,numFilters} =req.query;
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
    if(select){
        const selectList=select.split(',').join(' ');
        result=result.select(selectList);
    }
    if(numFilters){
        const operatorMap={
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte',
        }
        const regEX=/\b(<|>|>=|=|<=)\b/g;
        let filter=numFilters.replace(regEX,(match)=>`-${operatorMap[match]}`);
        const options =["price","rating"];
        filter=filter.split(',').forEach((items)=>{
            const [field,operator,value]=items.split('-')
            if(options.includes(field)){
                queryObject[field]={[operator]:Number(value)};
            }
        })
     }
    console.log(filter);
    console.log(numFilters)
    // add pagination
    const limit=Number(req.query.limit) || 5;
    const page=Number(req.query.page) || 1 ;
    const skip  =(page-1)*limit; // pagination algorithm
    result=result.limit(limit).skip(skip);

    let products=await result;
    res.status(200).json({products,ngHits:products.length}); // query operators

}
module.exports={
    getAllProducts,
    getProduct
}
