const getAllTasks=(req,res)=>{
    res.status(200).send("<h1>ALL TASK</h1>")
}
const getOneTask=(req,res)=>{
res.status(200).send("<h2>Fetch Only one Task</h2>")
}
const addTask=(req,res)=>{
    res.status(200).send("<h2>Fetch Only one Task</h2>")
}
const upDateTask=(req,res)=>{
    res.status(200).send("<h2>Task UpDated</h2>")

}
const deleteTask=(req,res)=>{
    res.status(200).send("<h2>Task deleted </h2>")

}

module.exports={
    getAllTasks,
    getOneTask,
    addTask,
    upDateTask,
    deleteTask
}