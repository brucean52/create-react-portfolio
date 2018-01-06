import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import NavBar from './components/navbar';
import LandingPage from './components/landing_page';
import Work from './components/work';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <LandingPage/>
        <Work/>
      </div>
    );
  }
}

export default App;
