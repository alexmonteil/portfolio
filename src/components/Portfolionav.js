import React from 'react';
import './Portfolionav.css';

const Portfolionav = ({ setWebsiteType }) => {
    return (
        <div className='pa2 mv2'>
            <input 
                type='submit'
                name='All'
                value='All'
                id='All'
                onClick={() => setWebsiteType('')}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Css'
                value='Css'
                id='Css'
                onClick={() => setWebsiteType('Css')}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Bootstrap'
                value='Bootstrap'
                id='Bootstrap'
                onClick={() => setWebsiteType('Bootstrap')}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Javascript'
                value='Javascript'
                id='Javascript'
                onClick={() => setWebsiteType('Javascript')}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='React'
                value='React'
                id='React'
                onClick={() => setWebsiteType('React')}
                className='portfolioButton'
                />

        </div>
    );
}

export default Portfolionav;