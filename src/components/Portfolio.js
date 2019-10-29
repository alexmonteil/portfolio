import React, { Component } from 'react';
import Scroll from './Scroll';
import Portfoliolist from './Portfoliolist';
import Portfolionav from './Portfolionav';
import './Portfolio.css';

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {
            websites: [],
            viewtype: ''
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/alexmonteil/projects-json/master/websites.json')
        .then(response => response.json())
        .then(websites => this.setState({websites: websites}));
    }

    onClickChange = (event) => {
        this.setState({viewtype: event.target.value});
    }

    onClickresetState = () => {
        this.setState({viewtype: ''});
    }

    render() {

        const { websites, viewtype } = this.state;
        const filterwebsites = websites.filter(website => {
            return website.type.toLowerCase().includes(viewtype.toLowerCase());
        })

        if (!websites.length) {
            return (
                <h1 className='portfoliotitle w-33 center'>Loading</h1>
            );
        } else {
            return (
                <div id='Portfolio' className='portfoliostyle vh-100 w-100'>
                    <h1 className='portfoliotitle w-33 shadow-1 center br3'>Portfolio</h1>
                    <Portfolionav clickChange={this.onClickChange} clickResetState={this.onClickresetState} />
                    <Scroll>
                        <Portfoliolist websites={filterwebsites} />
                    </Scroll>
                </div>
            );
        }
    }
}


export default Portfolio;
