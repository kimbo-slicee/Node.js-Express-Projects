// async Validation
const express =require('express');
const app=express();
const port = process.env.PORT ||3000;
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
    //Connect DB
        app.listen(port,()=>{
            console.log(`Server listing in Port ${port}....`);
        })

    }catch (error){

    }
    }
    start();
// my own  Middlewares
app.use(errorHandlerMiddleware)
app.use(notFound)
