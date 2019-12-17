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

/* To add additional custom svg icons :

  1-Follow guide in the custom-icons.js component
  2-Once you completed the steps in tools component:
    import your created icon object example: import { fapostgre, faheroku, yournewicon } from '../custom-icons/custom-icons';
    add your created icon object to the list below, example: library.add(fab, fas, fapostgre, faheroku, yournewicon);
    separate each object with a coma as done below.
*/

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
