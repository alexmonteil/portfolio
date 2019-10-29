import React from 'react';
import './Card.css';

const Card = ({ name, thumbnail, description, url }) => {
    return (
        <div className='cardstyle dib br3 pa3 ma2 bw2 grow shadow-5'>
            <h2>{name}</h2>
            <hr className='mt2' />
            <div className='mt2'>
                <img alt={name} src={thumbnail} width='300px' height='150px'/>
                <p>{description}</p>
                <a href={url} rel='noopener noreferrer' target='_blank'>View website</a>
            </div>
        </div>
    );
}



export default Card;