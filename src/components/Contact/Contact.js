import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Button, TextField } from '@mui/material';


const phone = <FontAwesomeIcon style={{ color: "#4c90ff", marginRight: '10px' }} icon={faPhoneAlt} />
const Contact = () => {
    return (
        <div className='contact'>
            <h1>We’d love to hear from you</h1>
            <div className="contact-items">


                <div className="contact-body">
                    <h3>Contact Now</h3>
                    <h4>{phone}+1 222-333-4444</h4>
                    <h4>{phone}+5 666-777-8888</h4>
                    <p>We're ready to answer any questions you might have about existing coverage, a new policy, or any other insurance help you need. You can call us at 1-800-541-7858. Or, fill out our information form below and one of our agents will be in touch as soon as possible.</p>
                </div>



                <div className="contact-inputs">

                        <span>
                        <TextField className='text-fields' id="filled-basic" label="Your Name" variant="filled" />
                        <TextField className='text-fields' id="filled-basic" label="Your E-mail" variant="filled" />
                        <TextField className='text-fields' id="filled-basic" label="Your Phone(Optional)" variant="filled" />
                        <TextField className='text-fields' id="filled-basic" label="Company Name(Optional)" variant="filled" />

                        </span>



                    <TextField
                         className='text-fields'
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                    />
                    <Button style={{marginTop:'20px'}}  className=' butn butn-full ' variant="contained">Submit</Button>


                </div>
            </div>
        </div>

    );
};

export default Contact;