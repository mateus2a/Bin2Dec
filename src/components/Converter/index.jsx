import React, { Component } from 'react';
import binToDec from 'bin-to-decimal';

import './styles.css'

class Converter extends Component {
  constructor() {
    super();
    this.convert = this.convert.bind(this);
  }

  convert(e) {
    e.preventDefault();
    const binaryNumber = document.querySelector('.input').value;
    if (binaryNumber.length > 8) {
      console.log('Numero maior que 8');
    } if (binaryNumber.includes(1) || binaryNumber.includes(1)) {
      const dec = binToDec(binaryNumber);
      document.querySelector('.decimal').value = dec;
    } else {
      console.log('Insira 1 ou 0');
    }

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