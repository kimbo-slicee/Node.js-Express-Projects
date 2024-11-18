require('dotenv').config();
require("express-async-handler");
const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
const router=require("./routes/tasks")
//my Middlewares
const notFound=require("./middlewares/notFoundError");
const errorHandler=require("./middlewares/errorHandler");
// Middlewares
app.use(express.json());
app.use('/api/v1/task',router)
app.use(errorHandler);
app.use(notFound);
//Extra packages
//routes
const start=async ()=>{
    try{
        app.listen(port,()=>{
            console.log(`PORT LISTING IN ${port}`);
        })
    }catch (error){
        console.log(error)
    }
}
start()
