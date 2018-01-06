import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './App.css';

import NavBar from './components/navbar';
import LandingPage from './components/landing_page';
import Work from './components/work';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <LandingPage/>
        <Work/>
        <About/>
      </div>
    );
  }
}

export default App;
