import React, { Component } from 'react';
import Scroll from './Scroll';
import Portfoliolist from './Portfoliolist';
import Portfolionav from './Portfolionav';
import './Portfolio.css';
import { projects } from '../projects/projects';
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

    /*

    Edit Portfolio Section: 
        replace the fetch URL below with JSON file URL containing your projects information
    */

    componentDidMount() {
        this.setState({ websites: projects });
    }

    setWebsiteType = event => {
        this.setState({viewtype: event.target.value});
    }

    resetWebsiteType = () => {
        this.setState({viewtype: ''});
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
                        <Portfolionav setWebsiteType={this.setWebsiteType} resetWebsiteType={this.resetWebsiteType} />
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