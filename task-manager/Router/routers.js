const express=require('express');
const router =express.Router();
// routes (endPoints)
// app.get('/api/v1/tasks') - get all the tasks
//app.get('/api/v1/tasks/:id')- get One Task
// app.post('/api/v1/tasks')-create New Task
// app.patch('api/v1/tasks/:id')-update Task
// app.delete('api/v1/tasks/:id')-delete Task
router.get('/',(req, res)=>{
    res.send("<h2>Hello World</h2>")
})
module.exports=router;