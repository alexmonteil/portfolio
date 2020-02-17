import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -60, scrollDuration: 200});

/* 

Edit Contact Section:
    1st <a> tag: Paste your email address in href attribute following the format 'mailto:youremail@example.com'
    2nd <a> tag: Replace href attribute with your linkedin profile URL
    3rd <a> tag: Replace href attribute with your github profile URL
*/

const Contact = () => {
    return (
        <ScrollableAnchor id={'Contact'}>
            <div className='contactstyle vh-100 w-100 center'>
                <h1 className='contacttitle shadow-1 center br3'>Contact</h1>
                <div className='mailsection w-70 center ma4'>
                    <h2 className='f1 mb5 center dosisFont'>Send me an email</h2>
                    <a className='toSectionButton' href='#'>Email me</a>
                </div>
                <h2 className='f2 ma5 center dosisFont'>Here are my social media platforms</h2>
                <div className='contactgrid w-40 center'>
                    <a href='#' className='iconLinkedin' rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    <a href='#' className='iconGithub' rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'github']} /></a>
                </div>
            </div>
        </ScrollableAnchor>
    );
}

export default Contact;