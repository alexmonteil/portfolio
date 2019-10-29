import React from 'react';
import './Card.css';

const Card = ({ name, thumbnail, description, url }) => {
    return (
        <div className='cardstyle dib br3 pa3 ma2 bw2 grow shadow-5'>
            <h1>{name}</h1>
            <hr/>
            <div>
                <img alt={name} src={thumbnail} width='200px' height='auto'/>
                <p>{description}</p>
                <a href={url} rel='noopener noreferrer' target='_blank'>View website</a>
            </div>
        </div>
    );
}



export default Card;