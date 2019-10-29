import React from 'react';
import './Portfolionav.css';

const Portfolionav = ({ clickChange, clickResetState }) => {
    return (
        <div className='pa2 mv2'>
            <input 
                type='submit'
                name='All'
                value='All'
                id='All'
                onClick={clickResetState}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Css'
                value='Css'
                id='Css'
                onClick={clickChange}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Bootstrap'
                value='Bootstrap'
                id='Bootstrap'
                onClick={clickChange}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='Javascript'
                value='Javascript'
                id='Javascript'
                onClick={clickChange}
                className='portfolioButton'
                />

            <input 
                type='submit'
                name='React'
                value='React'
                id='React'
                onClick={clickChange}
                className='portfolioButton'
                />

        </div>
    );
}

export default Portfolionav;