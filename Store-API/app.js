// async Validation
const express =require('express');
require('dotenv').config();
const app=express();
const port = process.env.PORT ||3000;
const connectDB=require('./DB/mongoos')
const notFound=require('./middlewares/notFound');
const errorHandlerMiddleware=require('./middlewares/errorHandlerMiddleware')
app.use(express.json());// use Express.Json() Middleware to read data coming form the frontend req body

app.get('/',(rea,res,next)=>{
    res.send(`<h1>
                        <mark>Hello World Click Her to Get your json API</mark>
                        <hr>
                        <button type="button"><a href="#">Click</a></button>
            
                    </h1>`)
})
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
app.use(errorHandlerMiddleware)
app.use(notFound)
