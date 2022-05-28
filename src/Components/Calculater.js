import React, { useState } from 'react';
import './Calculater.css';
import calculate from '../logic/calculate';

const Calculater = () => {
  const [item, setItem] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  // clickButton = clickButton.bind(this);

  const clickButton = (e) => {
    setItem({ ...item, ...calculate(item, e.target.name) });
  };

  return (
    <section className="calculater_section">
      <p className="result">
        {item.total}
        {item.operation}
        {item.next}
      </p>
      <button type="button" name="AC" onClick={clickButton}>AC</button>
      <button type="button" name="+/-" onClick={clickButton}>+/-</button>
      <button type="button" name="%" onClick={clickButton}>%</button>
      <button type="button" className="operator" name="÷" onClick={clickButton}>÷</button>
      <button type="button" name="7" onClick={clickButton}>7</button>
      <button type="button" name="8" onClick={clickButton}>8</button>
      <button type="button" name="9" onClick={clickButton}>9</button>
      <button type="button" className="operator" name="x" onClick={clickButton}>x</button>
      <button type="button" name="4" onClick={clickButton}>4</button>
      <button type="button" name="5" onClick={clickButton}>5</button>
      <button type="button" name="6" onClick={clickButton}>6</button>
      <button type="button" className="operator" name="-" onClick={clickButton}>-</button>
      <button type="button" name="1" onClick={clickButton}>1</button>
      <button type="button" name="2" onClick={clickButton}>2</button>
      <button type="button" name="3" onClick={clickButton}>3</button>
      <button type="button" className="operator" name="+" onClick={clickButton}>+</button>
      <button type="button" className="zero" name="0" onClick={clickButton}>0</button>
      <button type="button" name="." onClick={clickButton}>.</button>
      <button type="button" className="operator" name="=" onClick={clickButton}>=</button>
    </section>
  );
};

export default Calculater;
