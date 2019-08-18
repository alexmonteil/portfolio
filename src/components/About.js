import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id='About' className='aboutstyle vh-100 w-100'>
            <h1 className='abouttitle w-33 shadow-1 center br3'>About Me</h1>
            <article className='articleabout w-80 tc center br3 mt4 mb2'>
                <p>Hi, my name is Alex Monteil. I am a full stack engineer, I have been doing software development for a year. During this time, I have taught myself some of the latest web technologies and built web applications for clients as a consultant.</p>
                <p>Software development is my passion. I started doing it in my spare time for my own interest and it quickly grew into a career interest. This is why I constantly push myself to grow and learn the newest technologies in the field. I simply enjoy it !</p>
                <p>I have been working mainly with some of the javascript frameworks such as React, Redux and Express using the Node runtime environment to create blazing fast, asynchronous, and responsive web applications. </p>
                <p>My interests extend to machine learning, natural language processing and computer vision as I seek to build smart web applications with those capabilities.</p>
                <hr className='w-80 center' />
                <p className='mb4'>Thanks for viewing my portfolio</p>
                <a href='#Portfolio' className='mv2 toPortfolioButton'>Portfolio</a>
            </article> 
        </div>
    );
}

export default About;