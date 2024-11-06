const express=require('express');
const router =express.Router();
// routes (endPoints)
// app.get('/api/v1/task') - get all the tasks
//app.get('/api/v1/task/:id')- get One Task
// app.post('/api/v1/task')-create New Task
// app.patch('api/v1/task/:id')-update Task
// app.delete('api/v1/task/:id')-delete Task
router.get('/',(req, res)=>{
    res.send("<h2>Hello World</h2>")
})
module.exports=router;