require("dotenv").config();
const connectionDB=require("./DB/mongoos");
const Products=require("./models/product");
const jsonProducts=require("./products.json")
const start=async ()=>{
    try{
        await connectionDB(process.env.MONGO_URI)
        await Products.deleteMany();
        await Products.create(jsonProducts);
        console.log("Eventing es Okay 😁🎉")
        process.exit(0);
    }catch (error){
        console.log(error)
        console.log(Error);
        process.exit(1);
    }
}
start();