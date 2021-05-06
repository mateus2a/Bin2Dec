import React, { Component } from 'react';
import binToDec from 'bin-to-decimal';

import './styles.css'

class Converter extends Component {
  constructor() {
    super();
    this.convert = this.convert.bind(this);
  }

  convert() {
    const binaryNumber = document.querySelector('.input').value;

    const dec = binToDec(binaryNumber);

    document.querySelector('.decimal').value = dec;
  }

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
              <button onClick={ this.convert }>Converter</button>
            </div>
            <div className="input-dec">
              <input className="input decimal" type="text" placeholder="Result" disabled/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Converter;