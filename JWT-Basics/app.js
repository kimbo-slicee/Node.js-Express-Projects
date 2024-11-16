require('dotenv').config();
const express =require('express');
const app =express();
const port=process.env.PORT || 5000;
const notFoundMiddleware=require("./Middlewares/noteFound");
const errorHandlerMiddleware=require("./Middlewares/errorHandlerMiddleware");
const router=require('./Router/authRouter');
// Middlewares
app.use(express.json());
app.use(express.static('./public'))
app.use('/api/v1',router);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)
const start = ()=>{
    try{
        app.listen(port,()=>{
            console.log(`Express is working in Port ${port}`);
        });
    }catch (error){
        console.log(error);
    }
}
start();




