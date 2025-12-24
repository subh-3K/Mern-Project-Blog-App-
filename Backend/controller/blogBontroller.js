const  mongoose  = require('mongoose');
const blogModel=require('../models/blogModel');
const UserModel = require('../models/userModel');

exports.getAllBlogController=async (req,res)=>{
    try {
        const blogs=await blogModel.find({}).populate("user");
        if(!blogs){
            return res.status(200).send({
                success:false,
                message:"No Blogs Found",
            })
        }
            return res.status(200).send({
                success:true,
                bloglength:blogs.length,
                message:"All Blogs Found",
                blogs
            })
    } catch (error) {
        return res.status(500).send({
            message:'Error in get All Blog callback',
            success:false,
            error,
        })
    }
};

exports.createBlogController=async (req,res)=>{
    try {
        const {title,description,image,user}=req.body;
        if(!title || !description || !image || !user){
            return res.status(400).send({
                success:false,
                message:"fill All the details",
            })
        }
        const existinguser=await UserModel.findById(user);
        if(!existinguser){
            return res.status(404).send({
                success:false,
                message:"No user found",
            })
        }
        const newblog= new blogModel({title,description,image,user});
        const session=await mongoose.startSession();
        session.startTransaction();
        await newblog.save({session});
        existinguser.blogs.push(newblog);
        await existinguser.save({session});
        await session.commitTransaction();
        await newblog.save();
            return res.status(201).send({
                success:true,
                message:'blog created',
                newblog,
            })
    } catch (error) {
        return res.status(500).send({
            message:'Error in get All Blog callback',
            success:false,
            error,
        })      
    }
};

exports.updateBlogController=async(req,res)=>{
    try {
        //destructuring the id
        const{id}=req.params;
        const{title,description,image}=req.body;
        const blog= await blogModel.findByIdAndUpdate(id,{...req.body},{new:true});
        return res.status(200).send({
            success:true,
            message:'Blog Updated',
            blog,
        })
    } catch (error) {
        return res.status(500).send({
            message:'Error in get update Blog callback',
            success:false,
            error,
        })       
    }
};

exports.getBlogByIdController=async(req,res)=>{
    try {
        const{id}=req.params;
        const blog=await blogModel.findById(id);
        if(!blog){
            return res.status(400).send({
            success:false,
            message:'Blog not found',
        })
        }
        return res.status(200).send({
            success:true,
            message:'Blog fetched',
            blog,
        })
    } catch (error) {
        return res.status(500).send({
            message:'Error in get update Blog callback',
            success:false,
            error,
        }) 
    }
};

exports.deleteBlogController=async(req,res)=>{
    try {
     
        const blog=await blogModel.findByIdAndDelete(req.params.id).populate("user");//user ke attach korchi populate dia
        await blog.user.blogs.pull(blog);
        await blog.user.save();
        return res.status(200).send({
            success:true,
            message:'Blog deleted',
        })
        
    } catch (error) {
        return res.status(500).send({
            message:'Error in delete Blog callback',
            success:false,
            error,
        }) 
    }
};

exports.userBlogController=async(req,res)=>{
    try {
        const userblog=await UserModel.findById(req.params.id).populate("blogs");
        console.log(userblog);
        if(!userblog){
            return res.status(400).send({
            success:false,
            message:'Blog not found',
        })
        }
        return res.status(200).send({
            success:true,
            message:'User blogs',
            userblog,
        })

    } catch (error) {
        console.log(error);
       return res.status(500).send({
            message:'Error in user Blog callback',
            success:false,
            error,
        }) 
    }
};