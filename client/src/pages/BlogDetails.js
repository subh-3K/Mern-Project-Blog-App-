import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Box, InputLabel, TextField, Typography ,Button} from '@mui/material'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate ,useParams } from 'react-router-dom';

const BlogDetails = () => {
    
    const navigate=useNavigate()
    const id=useParams().id
    const[inputs,setInput]=useState({})
    const [blog,setBlog]=useState({})
    // get blogs
    const getBlogDetails=async ()=>{
        try {
        const {data}=await axios.get(`/api/v1/blog/get-blog/${id}`)
        if(data?.success){
            setBlog(data?.blog);
            setInput({
                title:data?.blog.title,
                description:data?.blog.description,
                image:data?.blog.image,
            })
        }
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
        getBlogDetails()
    },[id])
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const {data}=await axios.put(`/api/v1/blog/update-blog/${id}`,{
                title:inputs.title,
                description:inputs.description,
                image:inputs.image,
                user:id
            })
            if(data?.success){
                toast.success('Blog updated successfully!');
                setTimeout(() => navigate('/my-blogs'), 1500);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange=(e)=>{
        setInput(prevState=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box 
        width={"40%"}
        border={3}
        borderRadius={10}
        padding={3}
        margin="auto"
        boxShadow={"10px 10px 20px #ccc"}
        display="flex"
        flexDirection={"column"}
        marginTop={"30px"}
        >
        <Typography 
        variant='h2'
        textAlign={"center"}
        fontWeight={"bold"}
        padding={3}
        color='gray'
        >Edit Your Blog</Typography>
        <InputLabel sx={{mb:1,mt:2,fontSize:"24px",fontWeight:"bold"}}>
            Title
        </InputLabel>
        <TextField name='title' value={inputs.title} onChange={handleChange} margin='normal' variant='outlined' required/>
        <InputLabel sx={{mb:1,mt:2,fontSize:"24px",fontWeight:"bold"}}>
            Image
        </InputLabel>
        <TextField name='image' value={inputs.image} onChange={handleChange} margin='normal' variant='outlined' required/>
        <InputLabel sx={{mb:1,mt:2,fontSize:"24px",fontWeight:"bold"}}>
            Description
        </InputLabel>
        <TextField name='description' value={inputs.description} onChange={handleChange} margin='normal' variant='outlined' required/>
        <Button
        variant="contained"
        color="warning"
        type="submit"
        sx={{ mb: 2, marginTop:3 }}
      >
        UPDATE
      </Button>
        </Box>
    </form>
    </>
  )
}

export default BlogDetails
