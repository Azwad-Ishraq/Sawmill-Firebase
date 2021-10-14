import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import { useState } from 'react';
import './Register.css'
import useAuth from '../../hooks/useAuth'





const Register = () => {
    const {user,signInUsingGoogle,setUser} = useAuth()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth();
    

    const createNewUser = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
        })
    }

    const handleEmailchange = e => {
            setEmail(e.target.value)
    }

    const handlePasswordchange = e => {
            setPassword(e.target.value)
    }







    return (
        <div className='login'>
            <form onSubmit={createNewUser} className="login-form">

                <h1>Please Register</h1>


           <div className="login-form-inputs">


           <TextField onBlur={handleEmailchange} type='email' className='input-item' id="standard-basic" label="Enter Your Email" variant="standard" />


           <TextField onBlur={handlePasswordchange} type='password' className='input-item' id="standard-basic" label="Enter Your Password" variant="standard" />


            <p>Already have an account?<Link style={{color:'#4c90ff',textDecoration:'none'}} to='/login'>Click Here</Link></p>


           <span style={{width:'100%',display:'flex'}}>
           <Button type='submit' style={{marginRight:'20px'}} className=' butn butn-full' variant="contained">Register</Button>

           <Button onClick={signInUsingGoogle} className=' butn butn-full' variant="contained">Sign in with Google</Button>
          
           
           </span>
           </div>



            </form>
        </div>
    );
};

export default Register;