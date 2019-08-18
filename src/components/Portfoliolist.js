import React from 'react';
import Card from './Card';

const Portfoliolist = ({websites}) => {
    return (
        <div>
            {
                websites.map((site, i) => {
                    return (
                        <Card 
                            key={i}
                            name={websites[i].name}
                            thumbnail={websites[i].thumbnail}
                            description={websites[i].description}
                            url={websites[i].url}
                            />
                    );
                })
            }
        </div>
    );
}

export default Portfoliolist;