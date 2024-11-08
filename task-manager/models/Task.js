const mongoose=require('mongoose');
const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"YOU MUST PROVIDE A NAME"],
        trim:true,
        min: [5, 'MINIMUM CHARACTERS ARE 5'],
        maxLength: [15,'PROVIDE SHORT NAME'],
    },
    description:{
        type:String,
        minLength:[5,"PROVIDE MORE DESCRIPTION"]
    },
    completed:{
        type:Boolean,
        default:false
    }

});
module.exports=mongoose.model('Task',TaskSchema);

