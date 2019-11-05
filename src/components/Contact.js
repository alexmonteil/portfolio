import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -60, scrollDuration: 200});

const Contact = () => {
    return (
        <ScrollableAnchor id={'Contact'}>
            <div className='contactstyle vh-100 w-100 center'>
                <h1 className='contacttitle shadow-1 center br3'>Contact</h1>
                <div className='mailsection w-70 center ma4'>
                    <h2 className='f1 mb5 center dosisFont'>Send me an email :</h2>
                    <a className='clickToMailButton' href='mailto:alex.monteil@outlook.com'>Email me</a>
                </div>
                <h2 className='f2 ma5 center dosisFont'>Here are my social media platforms</h2>
                <div className='contactgrid w-40 center'>
                    <a href='https://www.linkedin.com/in/alex-monteil-310406149/' className='iconLinkedin' rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    <a href='https://github.com/alexmonteil/' className='iconGithub' rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={['fab', 'github']} /></a>
                </div>
            </div>
        </ScrollableAnchor>
    );
}

export default Contact;