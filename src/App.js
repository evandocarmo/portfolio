import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Skills from './Skills.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Skills />
      </div>
    );
  }
}

export default App;
