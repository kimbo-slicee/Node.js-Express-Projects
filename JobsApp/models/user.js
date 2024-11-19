const  mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
            required:[true,"PLEASE PROVIDE A NAME"],
            minLength:4,
            maxLength:20
    },
    email:{
        type:String,
        required:[true,"PLEASE PROVIDE A MAIL"],
        minLength:4,
        maxLength:20,
        match:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        unique:true
    },
    password:{
        type:String,
        required:[true,"PLEASE PROVIDE A Password"],
        minLength:4,
        unique:true
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Restricts to these values
        default: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

})
const User = mongoose.model('User', userSchema);
module.exports=User;