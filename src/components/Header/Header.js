import React from 'react';
import './Header.css'



import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            
            <div className="header-text">
                <h1>The easiest way to move forward</h1>
                <p>Cross-platform mobile services that help you everyday.</p>
               <span className='header-btn-span' style={{display:'flex'}}>

               <Button className=' butn butn-full header-btn' variant="contained">
                   <Link to='/pricing' style={{textDecoration:'none',color:'white'}}>Get Started</Link>
               </Button>

                <Button style={{marginLeft:'20px'}} className='butn header-btn-border  butn-border ' variant="outlined"> 
                <Link to='/about' style={{textDecoration:'none',color:'white'}}> Learn More</Link>
                </Button>

               </span>
            </div>
        </div>
    );
};

export default Header;