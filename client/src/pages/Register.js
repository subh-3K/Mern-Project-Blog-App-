import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  //rediation to another page
  const navigate=useNavigate();
  //state
  const[input,setInput]=useState({
    name:'',
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
     const {data} = await axios.post('/api/v1/user/register',{
      username:input.name,
      email:input.email,
      password:input.password
    });
    if(data.success){
      alert("User register successfully");
      navigate("/login");
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
        mx: 'auto',
        mt: 10,
        p: 4,
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',

      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 3,
          textAlign: 'center',
          fontWeight: 600,
          color: '#333',
         }}
      >
        Register
      </Typography>
      <TextField
        fullWidth
        placeholder="Name"
        name="name"
        type="text"
        value={input.name}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
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
        onClick={()=>navigate('/login')}
      >
        Already Registered? Please Login
      </Button>
    </Box>
    </form>
    </>
  );
};

export default Register;
