import React,{useState} from 'react'
import axios from 'axios'
import { Box, InputLabel, TextField, Typography ,Button} from '@mui/material'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const CreateBlog = () => {
    const id=localStorage.getItem('userId');
    const navigate=useNavigate();
    const[inputs,setInput]=useState({
        title:'',
        description:'',
        image:''
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const {data}=await axios.post('/api/v1/blog/create-blog',{
                title:inputs.title,
                description:inputs.description,
                image:inputs.image,
                user:id
            })
            if(data?.success){
                toast.success('Blog created successfully!');
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
        >Create a Blog</Typography>
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
        color="primary"
        type="submit"
        sx={{ mb: 2, marginTop:3 }}
      >
        Submit
      </Button>
        </Box>
    </form>
    
    </>
  )
}

export default CreateBlog
