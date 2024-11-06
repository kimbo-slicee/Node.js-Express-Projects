const express=require('express');
const app=express();
const port =5000;
const router=require('./Routers/routers');
app.use('/api/v1/tasks',router);
app.listen(port,()=>console.log(`Server Listening in Port ${port}`))