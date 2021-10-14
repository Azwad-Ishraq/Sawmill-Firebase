import React from 'react';
import { Link } from 'react-router-dom';
import './Faq.css'
const Faq = () => {
    return (
        <div className='faq'>
            <h1>Frequently Asked Questions</h1>
            <div className="faq-items">

                <div className="faq-item">
                    <h5>Is there a free trial?</h5>
                    <p>Yes, there is a 14 day free trial on all plans! You can also cancel at any time. Your subscription will last until the end of the current monthly billing cycle.</p>
                </div>

                <div className="faq-item">
                    <h5>Can I use both Integrations and Warehouses?</h5>
                    <p>Yes, there is a 14 day free trial on all plans! You can also cancel at any time.</p>
                </div>

                <div className="faq-item">
                    <h5>What counts as an API call?</h5>
                    <p>One call to Segment’s API counts as one API call, even if we send that data to multiple analytics services on your behalf. Things like exception and error tracking don’t count as API calls.</p>
                </div>


                <div className="faq-item">
                    <h5>Is there a free trial?</h5>
                    <p>Yes, there is a 14 day free trial on all plans! You can also cancel at any time. Your subscription will last until the end of the current monthly billing cycle.</p>
                </div>

                <div className="faq-item">
                    <h5>Can I use both Integrations and Warehouses?</h5>
                    <p>Yes, there is a 14 day free trial on all plans! You can also cancel at any time.</p>
                </div>

                <div className="faq-item">
                    <h5>What counts as an API call?</h5>
                    <p>One call to Segment’s API counts as one API call, even if we send that data to multiple analytics services on your behalf. Things like exception and error tracking don’t count as API calls.</p>
                </div>

               
            </div>
            <p style={{fontSize:'15px'}}>Have more questions? Feel free to <Link style={{textDecoration:'none',color:'#4d8fff'}} to='/contact'>Contact Us</Link></p>
        </div>
    );
};

export default Faq;