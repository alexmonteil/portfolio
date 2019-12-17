import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div id='Navbar' className='navbarstyle w-100'>
            <ul className='navlist h-100 w-100'>
                <li><a href='#Home'>Home</a></li>
                <li className='push'><a href='#About'>About</a></li>
                <li><a href='#Portfolio'>Portfolio</a></li>
                <li><a href='#Tools'>Tools</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>
        </div>
    );
}


export default Navbar;