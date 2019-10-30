import React from 'react';
import './Portfolionav.css';

const Portfolionav = ({ clickChange }) => {
    return (
        <div className='pa2 mv2'>
            <input 
                type='submit'
                name='All'
                value='All'
                id='All'
                onClick={() => clickChange('')}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Css'
                value='Css'
                id='Css'
                onClick={() => clickChange('Css')}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Bootstrap'
                value='Bootstrap'
                id='Bootstrap'
                onClick={() => clickChange('Bootstrap')}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Javascript'
                value='Javascript'
                id='Javascript'
                onClick={() => clickChange('Javascript')}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='React'
                value='React'
                id='React'
                onClick={() => clickChange('React')}
                className='portfolioButton'
                />

        </div>
    );
}

export default Portfolionav;