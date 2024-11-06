const express=require('express');
const app=express();
const port =5000;
const tasks=require('./Router/routers');
const { swaggerUi, swaggerDocs } = require("./env/swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/v1/tasks',tasks);
app.listen(port,()=>{
    console.log(`Server Listening in Port ${port}`);
    console.log("Swagger docs available at http://localhost:3000/api-docs");

});
