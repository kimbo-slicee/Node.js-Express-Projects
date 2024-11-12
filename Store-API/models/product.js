const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,'product name must be provided']
    },
    price:{
        type:Number,
        required:[true, "product price must be provided"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createAt :{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            value:["ikea","midday","caressa","marcos"],
            message:"{value} is not supported"
        }}


})
module.exports=mongoose.model("products",productSchema);