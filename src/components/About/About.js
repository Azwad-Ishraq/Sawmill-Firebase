import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt,faBell } from '@fortawesome/free-solid-svg-icons'

const clould = <FontAwesomeIcon style={{color:"#4c90ff",marginRight:'10px'}} icon={faCloudUploadAlt} />
const bell = <FontAwesomeIcon style={{color:"#4c90ff",marginRight:'10px'}} icon={faBell} />
const About = () => {
    
    return (
        <div className='about'>


            <div className="about-heading">
                <h1>Designed for efficient country management</h1>
                <p>Under the hood, Cactus runs a small local web server for each website you're working on. This makes it possible to build your website locally, using modern web technologies, and have the results generated to a collection of flat files.</p>
            </div>

            <div className="about-body">


                <img src="https://ninetheme.com/themes/sawmill/wp-content/uploads/2016/08/description-1.jpg" alt=""/>



                <div className="about-body-text">


                    <div className="about-body-text-item">
                        <h1>{clould}Personal cloud storage</h1>
                        <p>Whether it’s overall happiness in a country, the unemployment rate, or the participation rate in the latest polls or e-votes, you can view everything on a powerful, customizable dashboard.</p>
                    </div>



                    <div className="about-body-text-item">
                        <h1>{bell}Easy to use notifications</h1>
                        <p>Whether it’s overall happiness in a country, the unemployment rate, or the participation rate in the latest polls or e-votes, you can view everything on a powerful, customizable dashboard.</p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default About;