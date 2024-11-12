// async Validation
const express =require('express');
require('dotenv').config();
const app=express();
const port = process.env.PORT ||5000 ;
const connectDB=require('./DB/mongoos')
const notFound=require('./middlewares/notFound');
const errorHandlerMiddleware=require('./middlewares/errorHandlerMiddleware')
const productsRouters=require('./Router/products')
app.use(express.json());// use Express.Json() Middleware to read data coming form the frontend req body
app.get('/',(req, res, next)=>{
    res.send("<h1>Click here to get all Products <a href='/api/v1/products'>Products</a></h1>");
})
app.use('/api/v1/products',productsRouters);
app.use(errorHandlerMiddleware)
app.use(notFound)

const start=async()=> {
    try {
       await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`Server listing in Port ${port}....`);
        })

    }catch (error){
        console.log(error)
    }
    }
    start();
// my own  Middlewares

