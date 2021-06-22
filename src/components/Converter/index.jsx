import React, { Component } from 'react';
import binToDec from 'bin-to-decimal';

import './styles.css'

class Converter extends Component {
  constructor() {
    super();
    this.convertCondition = this.convertCondition.bind(this);
    this.isValidLength = this.isValidLength.bind(this);
  }

  componentDidMount() {
    document.querySelector('.input').addEventListener('keydown', function(ev) {
      if(ev.keyCode !== 48 && ev.keyCode !== 49 && ev.keyCode !== 8) {
        ev.preventDefault();
      }
    });
  }

  isValidLength() {
    const binaryNumber = document.querySelector('.input').value;
    if (binaryNumber.length <= 8) {
      return false;
    }
    return true;
  }

  addInvalidNumber(spanInvalidNumber, inputBin) {
    document.querySelector('.input').style.border = '2px solid red';
    spanInvalidNumber.innerText = 'Max length is 8';
    spanInvalidNumber.style.display = 'block';
    spanInvalidNumber.style.color = 'red';
    spanInvalidNumber.classList.add('spanRed');
    spanInvalidNumber.style.paddingLeft = '10px'
    spanInvalidNumber.style.paddingTop = '5px'
    inputBin.appendChild(spanInvalidNumber);
  }

  removeInvalidNumber() {
    if (document.body.contains(document.querySelector('span'))) {
      document.querySelector('span').style.display = 'none';
    }
  }

  convertNumbers() {
    const binaryNumber = document.querySelector('.input').value;
    const dec = binToDec(binaryNumber);
    document.querySelector('.decimal').value = dec;
    document.querySelector('.input').style.border = 'none';
  }

  convertCondition(e) {
    e.preventDefault();
    const inputBin = document.querySelector('.input-bin');
    const spanInvalidNumber = document.createElement('span');

    if (this.isValidLength()) {
      this.addInvalidNumber(spanInvalidNumber, inputBin);
    } else {
      this.convertNumbers();
      this.removeInvalidNumber();
    }
  }

  render() { 
    return (
      <div className="container">
        <div className="converter">
          <h2>Convert Binary to Decimal</h2>
          <div className="elements">
            <div className="input-bin">
              <input className="input" type="number" placeholder="Enter your binary number"/>
            </div>
            <div className="btn-convert">
              <button onClick={ this.convertCondition }>Converter</button>
            </div>
            <div className="input-dec">
              <input className="input decimal" type="number" placeholder="Result" disabled/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Converter;