import React from 'react';
import Card from './Card';

const Portfoliolist = ({websites}) => {
    return (
        <div>
            {
                websites.map((website, i) => {
                    return (
                        <Card 
                            key={i}
                            name={website.name}
                            thumbnail={website.thumbnail}
                            description={website.description}
                            url={website.url}
                            />
                    );
                })
            }
        </div>
    );
}

export default Portfoliolist;