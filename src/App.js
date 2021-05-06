import React, { Component } from 'react';
import './App.css';

import Converter from './components/Converter'

class App extends Component {
  render() { 
    return (
      <div>
        <h1>App</h1>
        <Converter />
      </div>
    );
  }
}
 
export default App;
