import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/Store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  //rediation to another page
  const navigate=useNavigate();
  const dispatch=useDispatch();
  //state
  const[input,setInput]=useState({
    email:'',
    password:''
  })

//for handling the change input values
  const handleChange=(e)=>{
    setInput(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }
//for handle form submit
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
     const {data} = await axios.post('/api/v1/user/login',{
      
      email:input.email,
      password:input.password
    });
    if(data.success){
      localStorage.setItem("userId",data?.user._id);
      dispatch(authActions.login());
      toast.success('🎉 Login successful!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
  });

    setTimeout(() => {
      navigate("/blogs");
    }, 1000); // delay to show toast

    }
    else{
      alert("Incorrect login info");
    }

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        margin: 'auto',
        mt: 8,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}
      >
        Login
      </Typography>

      <TextField
        fullWidth
        placeholder="Email"
        name="email"
        type="email"
        value={input.email}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        placeholder="Password"
        name="password"
        type="password"
        value={input.password}
        onChange={handleChange}
        required
        sx={{ mb: 3 }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mb: 2, marginTop:3 }}
      >
        Submit
      </Button>
      <Button
        variant="text"
        color="secondary"
        fullWidth
        onClick={()=>navigate('/')}
      >
        New User? Please Register
      </Button>
    </Box>
    </form>
  
    </>
  );
};

export default Login;

