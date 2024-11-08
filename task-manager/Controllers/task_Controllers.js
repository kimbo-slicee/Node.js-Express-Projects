const  Task=require('../models/Task')
const getAllTasks= async (req,res)=>{
    try{
        const tasks=await Task.find({});
        res.status(200).json({tasks});
    }catch (error){
        res.status(400).json({error})
    }
}
const getOneTask= async (req,res)=>{
    try{
    const {id:taskID}=req.params;
    const task=await Task.findOne({_id:taskID})
    if(!task) return res.status(400).json({ErrorMessage:"TASK NOTE FOUND"});
    res.status(200).json({task});
    }catch (error){
        res.status(500).json({error})
    }

}
const createTask=async (req,res)=>{
    try{
    const task =await Task.create(req.body);
    res.status(200).json(task);
    }catch (error){
        res.status(500).json({error})
    }
}
const upDateTask= async (req,res)=>{
    try{
   const {id:taskID}=req.params;

    }catch(error){

    }
}
const deleteTask=async (req,res)=>{
try{
    const {id:taskID}=req.params;
    const task=await Task.findOneAndDelete({_id:taskID})
    if(!task) return res.status(400).json({ErrorMessage:"TASK NOTE FOUND"});
    res.status(200).json({task});
}catch (error){
    res.status(500).json({error})
}
}

module.exports={
    getAllTasks,
    getOneTask,
    createTask,
    upDateTask,
    deleteTask
}