const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const colors=require('colors');
const dotenv=require('dotenv');
const databaseConnection= require('./config/db.js')

//rest obj
const app=express();

dotenv.config();
databaseConnection();
const port = process.env.PORT||3001;

//router
const userRoutes=require('./routes/userRoutes.js')
const blogRoutes=require('./routes/blogRoutes.js');

//moddlewares
app.use(cors());
app.use(express.json());//user theke json data nebo
app.use(morgan('dev'));//short url console a dekhabe

//routes
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/blog',blogRoutes)


app.listen(port,()=>{
    console.log(`app is on port ${port}`.bgCyan.white);
})