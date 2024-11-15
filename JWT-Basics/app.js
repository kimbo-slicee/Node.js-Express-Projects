const express =require('express');
const app =express();
const port=process.env.PORT || 5000;
// Middlewares
app.use(express.json());
app.use(express.static('./public'))
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




