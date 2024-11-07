const express=require('express');
const router =express.Router();
const {
    getAllTasks,
    getOneTask,
    createTask,
    upDateTask,
    deleteTask
}=require('../Controllers/task_Controllers')
// routes (endPoints)
// app.get('/api/v1/tasks') - get all the tasks
//app.get('/api/v1/tasks/:id')- get One Task
// app.post('/api/v1/tasks')-create New Task
// app.patch('api/v1/tasks/:id')-update Task
// app.delete('api/v1/tasks/:id')-delete Task
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getOneTask).patch(upDateTask).delete(deleteTask);

module.exports=router;