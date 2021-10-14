import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css'

const Pricing = () => {
    return (
        <div className='pricing'>


            <h1>Choose the best subscription for you</h1>
            <p>Under the hood, Cactus runs a small local web server for each website you're working on.</p>

            <div className="pricing-cards">



                <div className="pricing-card-item">
                    <h2>Individual</h2>
                    <h5>Standalone</h5>
                    <h1>$9</h1>
                    <p>after the 14 days free trial</p>

                    <p>All the awesomeness</p>
                    <p>Up to 15 projects</p>
                    <p>Unlimited tasks</p>
                    <p>Basic Dashboards</p>
                    <Button style={{marginLeft:'20px'}} className='butn  butn-border ' variant="outlined">
                        <Link to='/home' className='link-fix' >Choose</Link>
                    </Button>
                </div>


                <div className="pricing-card-item">
                    <h2>Business</h2>
                    <h5>Team</h5>
                    <h1>$39</h1>
                    <p>after the 14 days free trial</p>

                    <p>All the awesomeness</p>
                    <p>Up to 15 projects</p>
                    <p>Unlimited tasks</p>
                    <p>Basic Dashboards</p>
                    <Button style={{marginLeft:'20px'}} className='butn  butn-border ' variant="outlined">
                    <Link className='link-fix' to='/home'>Choose</Link>
                    </Button>
                </div>



                <div className="pricing-card-item">
                    <h2>Complex</h2>
                    <h5>Companies</h5>
                    <h1>$99</h1>
                    <p>after the 14 days free trial</p>

                    <p>All the awesomeness</p>
                    <p>Up to 15 projects</p>
                    <p>Unlimited tasks</p>
                    <p>Basic Dashboards</p>
                    <Button style={{marginLeft:'20px'}} className='butn  butn-border ' variant="outlined">
                    <Link className='link-fix' to='/home'>Choose</Link>
                    </Button>
                </div>


                
            </div>
        </div>
    );
};

export default Pricing;