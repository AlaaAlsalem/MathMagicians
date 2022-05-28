import React from 'react';
import './Calculater.css';

class Calculater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };  }

  render() {
    return (
      <section className="calculater_section">
        <p className="result">0</p>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="operator">÷</button>

        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="operator">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operator">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operator">+</button>
        <button type="button" className="zero">0</button>
        <button type="button">.</button>
        <button type="button" className="operator">=</button>

      </section>
    );
  }
}
export default Calculater;
