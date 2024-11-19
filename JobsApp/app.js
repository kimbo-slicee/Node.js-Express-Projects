require('dotenv').config();
require('express-async-errors');
const express=require("express");
const app=express();
const port=process.env.PORT || 5000;
const jobsRouter=require("./routes/jobes")
const authRouter=require("./routes/auth")
// ConnectionDB
const connectionDB=require("./DB/connectDB");
//my Middlewares
const notFound=require("./middlewares/notFoundError");
const errorHandler=require("./middlewares/errorHandler");
// Middlewares
app.use(express.json());
app.use('/api/v1/jobs',jobsRouter);
app.use('/api/v1/auth',authRouter);
// Global error handler (for other types of errors)
app.use(errorHandler);
// 404 Not Found Handler (this should be the last one)
app.use(notFound);

//Extra packages
//routes
const start=async ()=>{
    try{
        await connectionDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`PORT LISTING IN ${port}`);
        })
    }catch (error){
        console.log(error)
    }
}
start()
