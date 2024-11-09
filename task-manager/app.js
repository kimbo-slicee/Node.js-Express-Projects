require('dotenv').config();
const express=require('express');
const app=express();
const port =process.env.PORT|| 5000;
const notFound=require('./Middlewares/not-found')
const tasks=require('./Router/routers');
const connectDB= require('./DB/mongoDB');
const errorHandlerMiddleware=require('./Middlewares/error-handler')
app.use(express.json());
app.use('/api/v1/tasks',tasks);
app.use(errorHandlerMiddleware);
app.use(notFound);
const start=async ()=>{
    try {
       await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Server Listening in Port ${port}`);
        });

    }catch (error){
        console.log(error)
    }
}
start();
