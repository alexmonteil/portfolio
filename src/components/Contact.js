import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

const Contact = () => {
    return (
        <div id='Contact' className='contactstyle vh-100 w-100'>
            <h1 className='contacttitle shadow-1 center br3'>Contact</h1>
            <div className='mailsection w-70 center ma4'>
                <h2 className='f2 mb5 center'>Send me an email :</h2>
                <a className='clickToMailButton' href='mailto:alex.monteil@outlook.com'>Email me</a>
            </div>
            <h2 className='f3 ma5 center'>Here are my social media platforms</h2>
            <div className='contactgrid w-40 center'>
                <a href='https://www.linkedin.com/in/alex-monteil-310406149/' className='iconLinkedin' rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                <a href='https://github.com/alexmonteil/' className='iconGithub' rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'github']} /></a>
            </div>
        </div>
    );
}

export default Contact;