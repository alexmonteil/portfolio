import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div id='Home' className='headerstyle vh-100 w-100'>
            <article className='overlay h-100 w-100 flex flex-column flex-wrap justify-center'>
                <div className='articletext pa4 white'>
                    <h1 className='f1 fw3 f-subheadline-l'>Hi, my name is Alex Monteil</h1>
                    <br/>
                    <h1 className='f1 fw3 f-subheadline-l'>Welcome to my Portfolio !</h1>
                    <br/>
                    <a href='#About' className='toAboutButton mt2'>About Me</a>
                </div>
            </article>
        </div>
    );
}


export default Header;