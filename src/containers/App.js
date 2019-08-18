import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fapostgre, faheroku } from '../custom-icons/custom-icons';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Tools from '../components/Tools';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './App.css';

library.add(fab, fas, fapostgre, faheroku);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Tools />
        <Contact />
        <Footer />
      </div>
    );
  }
}


export default App;
