
import { getAuth,signInWithEmailAndPassword  } from '@firebase/auth';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

import './Login.css'
const Login = () => {
    const {setUser} = useAuth()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth();
    

    

    const handleEmailchange = e => {
            setEmail(e.target.value)
    }

    const handlePasswordchange = e => {
            setPassword(e.target.value)
    }

    const processLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            setUser(result.user)
            
        })
    }




    return (

        <div className='login'>
            <form onSubmit={processLogin} className="login-form">

                <h1>Please Login</h1>


           <div className="login-form-inputs">


           <TextField onBlur={handleEmailchange}  type='email' className='input-item' id="standard-basic" label="Enter Your Email" variant="standard" />


           <TextField onBlur={handlePasswordchange} type='password' className='input-item' id="standard-basic" label="Enter Your Password" variant="standard" />

           <Button type='submit' className=' butn butn-full' variant="contained">Login</Button>
           </div>



            </form>
        </div>
    );
};

export default Login;