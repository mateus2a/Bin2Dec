import React, { Component } from 'react';
import binToDec from 'bin-to-decimal';

import './styles.css'

class Converter extends Component {
  constructor() {
    super();
    this.convert = this.convert.bind(this);
    this.isValidLength = this.isValidLength.bind(this);
  }

  isValidLength() {
    const binaryNumber = document.querySelector('.input').value;
    if (binaryNumber.length <= 8) {
      return false;
    }
    return true;
  }

  convert(e) {
    e.preventDefault();
    const binaryNumber = document.querySelector('.input').value;
    const inputBin = document.querySelector('.input-bin');
    const spanInvalidNumber = document.createElement('span');

    if (this.isValidLength()) {
      document.querySelector('.input').style.border = '2px solid red';
      spanInvalidNumber.innerText = 'Max length is 8';
      spanInvalidNumber.style.display = 'block';
      spanInvalidNumber.style.color = 'red';
      spanInvalidNumber.style.paddingLeft = '10px'
      spanInvalidNumber.style.paddingTop = '5px'
      inputBin.appendChild(spanInvalidNumber);
    } else {
      const dec = binToDec(binaryNumber);
      document.querySelector('.decimal').value = dec;
      document.querySelector('.input').style.border = 'none';
      spanInvalidNumber.style.innerHTML = '';
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