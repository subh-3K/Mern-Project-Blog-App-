const mongoose =require("mongoose")//import statement
const colors=require('colors');
const dotenv=require('dotenv');
dotenv.config();

const mongo_URL=process.env.MONGO;

const databaseConnection=async ()=>{
   await mongoose.connect(mongo_URL)
    .then(()=>{
        console.log(`Database connection successfull`.bgMagenta.white);
    })
    .catch((err)=>{
        console.log(`Database connection failed ${err}`.bgRed.white);
    });
};

module.exports= databaseConnection; //not default export