const  Task=require('../models/Task')
const {response} = require("express");
const getAllTasks=(req,res)=>{
    res.status(200).send("<h1>ALL TASK</h1>")
}
const getOneTask=(req,res)=>{
res.status(200).send("<h2>Fetch Only one Task</h2>")
}
const createTask=async (req,res)=>{
    console.log(req.body)
    res.send(res.body)
// const task=await Task.create();
//     res.status(200).json(task)
}
const upDateTask= async (req,res)=>{
    res.status(200).send("<h2>Task UpDated</h2>")

}
const deleteTask=(req,res)=>{
    res.status(200).send("<h2>Task deleted </h2>")

}

module.exports={
    getAllTasks,
    getOneTask,
    createTask,
    upDateTask,
    deleteTask
}