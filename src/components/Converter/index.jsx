import React, { Component } from 'react';
import './styles.css'

class Converter extends Component {
  render() { 
    return (
      <div className="container">
        <div className="converter">
          <h2>Convert Binary to Decimal</h2>
          <div className="elements">
            <div className="input-bin">
              <input className="input" type="text" placeholder="Enter your binary number"/>
            </div>
            <div className="btn-convert">
              <button>Converter</button>
            </div>
            <div className="input-dec">
              <input className="input" type="text" placeholder="Result" disabled/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Converter;