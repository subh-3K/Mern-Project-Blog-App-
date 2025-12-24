const UserModel = require("../models/userModel");
const bcrypt= require('bcrypt');

exports.getAllUsers=async (req,res)=>{
    try {
        const users=await UserModel.find({});
         return res.status(201).send({
            userCount:users.length,
                success:true,
                message:'All user data',
                users,
            })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error in getALLUser callback',
            success:false,
            error,
        })
    }
}

exports.registerController=async(req,res)=>{
    try {
        //validation
        const{username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(400).send({
                success:false,
                message:'Please fill all the fields'
            })
        }
        //for existing user
        const existingUser=await UserModel.findOne({email});
        if(existingUser){
             return res.status(400).send({
                success:false,
                message:'User already exists'
            })
        }
        const hashedPasswd=await bcrypt.hash(password,10);
        //creating new user
        const user=new UserModel({username,email,password:hashedPasswd})
        await user.save()
         return res.status(201).send({
                success:true,
                message:'User created',
                user,
            })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:'Error in register callback',
            success:false,
            error,
        })
    }
}

exports.loginController=async (req,res)=>{
    try {
        //validation
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).send({
                success:false,
                message:'Please fill all the fields'
            })
        }
        const user=await UserModel.findOne({email});
        if(!user){
             return res.status(400).send({
                success:false,
                message:'User not exists'
            })
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).send({
                success:false,
                message:'Invalid Pass'
            }) 
        }
            return res.status(201).send({
                success:true,
                message:'LOG IN success',
                user,
            })
        
    } catch (error) {
          return res.status(500).send({
            message:'Error in LOGIN callback',
            success:false,
            error,
        })
    }
}