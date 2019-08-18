import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div className='scrollback mt2'>
            <div className='scrollstyle'>
                {props.children}
            </div>
        </div>
    );
}

export default Scroll;