// async Validation
const express =require('express');
const app=express();
const port = process.env.PORT ||3000;
app.use(express.json());// use Express Json() Middleware to write data coming form the frontend

const start=async()=> {
    try {
        app.listen(port,()=>{
            console.log(`Server listing in Port ${port}....`);
        })

    }catch (error){

    }
    }
    start();
