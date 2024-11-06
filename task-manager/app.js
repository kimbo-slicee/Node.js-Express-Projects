const express=require('express');
const app=express();
const port =5000;
const tasks=require('./Router/routers');
app.use('/api/v1/tasks',tasks);
app.listen(port,()=>console.log(`Server Listening in Port ${port}`))