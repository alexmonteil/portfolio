import React from 'react';
import './Portfolionav.css';

/* 

Edit Portfolionav Section:
    Edit <input> name attributes with your projects types
    Edit <input> value attributes with your projects types
*/

const Portfolionav = ({ setWebsiteType, resetWebsiteType }) => {
    return (
        <div className='pa2 mv2'>
            <input 
                type='submit'
                name='All'
                value='All'
                id='All'
                onClick={resetWebsiteType}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Css'
                value='Css'
                id='Css'
                onClick={setWebsiteType}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Bootstrap'
                value='Bootstrap'
                id='Bootstrap'
                onClick={setWebsiteType}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Javascript'
                value='Javascript'
                id='Javascript'
                onClick={setWebsiteType}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='React'
                value='React'
                id='React'
                onClick={setWebsiteType}
                className='portfolioButton'
                />

        </div>
    );
}

export default Portfolionav;