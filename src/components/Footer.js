import React from 'react';
import './Footer.css';


/* 
Replace the href attribute with your linkedin profile URL
Replace the text between the <a> tags with your name
*/
const Footer = () => {
    return (
        <div id='Footer' className='footerstyle tc'>
            <p>&copy; Reactfolio - Created by <a href='#' rel='noopener noreferrer' target='_blank'>john doe</a></p>
        </div>
    );
}

export default Footer;