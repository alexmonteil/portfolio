import React, { Component } from 'react';
import Scroll from './Scroll';
import Portfoliolist from './Portfoliolist';
import Portfolionav from './Portfolionav';
import './Portfolio.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -60, scrollDuration: 200});

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            websites: [],
            viewtype: ''
        }
    }

    componentDidMount() {
        fetch('https://alexmonteil.github.io/projects-json/websites.json')
        .then(response => response.json())
        .then(websites => this.setState({websites: websites}))
        .catch(err => console.log(err));
    }

    setWebsiteType = type => {
        this.setState({viewtype: type});
    }

    render() {

        const { websites, viewtype } = this.state;
        const filterwebsites = websites.filter(website => {
            return website.type.toLowerCase().includes(viewtype.toLowerCase());
        })

        if (websites.length) {
            return (
                <ScrollableAnchor id={'Portfolio'}>
                    <div className='portfoliostyle vh-100 w-100'>
                        <h1 className='portfoliotitle shadow-1 center br3'>Portfolio</h1>
                        <Portfolionav setWebsiteType={this.setWebsiteType} />
                        <Scroll>
                            <Portfoliolist websites={filterwebsites} />
                        </Scroll>
                    </div>
                </ScrollableAnchor>
            );
        } else {
            return (
                <ScrollableAnchor id={'Portfolio'}>
                    <div className='portfoliostyle vh-100 w-100'>
                        <h1 className='portfoliotitle w-33 shadow-1 center br3'>Portfolio</h1>
                        <h2>Loading...</h2>
                    </div>
                </ScrollableAnchor>
            );
        }
    }
}


export default Portfolio;