const Task=require('../models/Task');
const asyncWrapper=require('../Middlewares/async');
const getAllTasks=asyncWrapper(  async (req,res)=>{
        const tasks=await Task.find({});
        res.status(200).json({success:true,data:{tasks,nbHits:tasks.length}});
});
const getOneTask= asyncWrapper( async (req,res)=>{
    const {id:taskID}=req.params;
    const task=await Task.findOne({_id:taskID})
    if(!task) return res.status(400).json({ErrorMessage:"TASK NOTE FOUND"});
    res.status(200).json({task});
});
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
   const task= await Task.findByIdAndUpdate({_id:taskID},req.body);
   if(!task) return res.status(400).json({error:"TASK NOTE FOUND"});
   res.status(200).json({task:task});

    }catch(error){
        res.status(500).json({success:false,msg:"DATA BASE ERROR"});
    }
}
const deleteTask=async (req,res)=>{
try{
    const {id:taskID}=req.params;
    const task=await Task.findOneAndDelete({_id:taskID})
    if(!task) return res.status(400).json({ErrorMessage:"TASK NOTE FOUND"});
    res.status(200).json({task:null, status:'success'});
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