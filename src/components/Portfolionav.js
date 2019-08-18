import React from 'react';

const Portfolionav = ({ clickChange, clickResetState }) => {
    return (
        <div>
            <input 
                type='submit'
                name='All'
                value='All'
                id='All'
                onClick={clickResetState}
                />

            <input 
                type='submit'
                name='Css'
                value='Css'
                id='Css'
                onClick={clickChange}
                />

            <input 
                type='submit'
                name='Bootstrap'
                value='Bootstrap'
                id='Bootstrap'
                onClick={clickChange}
                />

            <input 
                type='submit'
                name='Javascript'
                value='Javascript'
                id='Javascript'
                onClick={clickChange}
                />

            <input 
                type='submit'
                name='React'
                value='React'
                id='React'
                onClick={clickChange}
                />

        </div>
    );
}

export default Portfolionav;