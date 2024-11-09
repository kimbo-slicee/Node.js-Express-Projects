const Task=require('../models/Task');
const asyncWrapper=require('../Middlewares/async');
const {creatAPIErrorInstance}=require('../Errors/CustomAPIError')
const getAllTasks=asyncWrapper(  async (req,res,next)=>{
    if(!tasks){
        const error=new Error("NOT FOUND ❌");
        error.status=404;
        return next(error);
    }
        const tasks=await Task.find({});
        res.status(200).json({success:true,data:{tasks,nbHits:tasks.length}});
});
const getOneTask= asyncWrapper( async (req,res,next)=>{
    const {id:taskID}=req.params;
    const task=await Task.findOne({_id:taskID})
    if(!task){
     return next(creatAPIErrorInstance("Task Note Found",404))
    }

    res.status(200).json({task});
});
const createTask=asyncWrapper( async (req,res,next)=>{
    const task =await Task.create(req.body);
    if(!task) return next(creatAPIErrorInstance("Please ADD Take",404))
    res.status(200).json(task);

})
const upDateTask=asyncWrapper( async (req,res,next)=>{
   const {id:taskID}=req.params;
   const task= await Task.findByIdAndUpdate({_id:taskID},req.body);
   if(!task) return next(creatAPIErrorInstance("Task Note Found",404));
   res.status(200).json({task:task});

});
const deleteTask=asyncWrapper( async (req,res)=>{
    const {id:taskID}=req.params;
    const task=await Task.findOneAndDelete({_id:taskID})
    if(!task) return res.status(400).json({ErrorMessage:"TASK NOTE FOUND"});
    res.status(200).json({task:null, status:'success'});
})

module.exports={
    getAllTasks,
    getOneTask,
    createTask,
    upDateTask,
    deleteTask
}