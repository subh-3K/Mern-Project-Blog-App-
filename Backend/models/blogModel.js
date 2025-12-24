const mongoose=require('mongoose');
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title is required'],

    },
    description:{
        type:String,
        required:[true,'title is required'],
    },
    image:{
        type:String,
        required:[true,'title is required'],
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        require:[true,'ID id required'],
    }
},{timeseries:true});
const blogModel= mongoose.model("Blog",blogSchema);
module.exports=blogModel;