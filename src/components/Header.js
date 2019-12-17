import React from 'react';
import './Header.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -60, scrollDuration: 200});

/*

Edit Header Section:
    1st h1 tag: edit content with your name
    2nd h1 tag: edit content to create your own greeting
*/

const Header = () => {
    return (
        <ScrollableAnchor id={'Home'}>
            <div className='headerstyle vh-100 w-100'>
                <article className='overlay min-vh-100 w-100 flex flex-column flex-wrap justify-center'>
                    <div className='articletext pa4 white'>
                        <h1 className='f1 fw3 f-subheadline-l'>Hi, my name is Alex Monteil</h1>
                        <br/>
                        <h1 className='f1 fw3 f-subheadline-l'>Welcome to my Portfolio !</h1>
                        <br/>
                        <a href='#About' className='toAboutButton mt2'>About Me</a>
                    </div>
                </article>
            </div>
        </ScrollableAnchor>
    );
}


export default Header;