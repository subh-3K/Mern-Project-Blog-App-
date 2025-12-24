const mongoose= require('mongoose');
const schema=mongoose.Schema;
const UserSchema= new schema({
    username:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    blogs:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Blog',
        }
    ]
},{timestamps:true})

const UserModel=mongoose.model('User',UserSchema);
module.exports=UserModel;