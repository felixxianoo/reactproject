import styles from './App.css';
import React, { useState, useEffect } from 'react';

function App(props) {
  const defaultColor = '#fff';
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(defaultColor);

  const handleSubtract = () => {
    setCount(count - 1);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  
  // useEffect is similar to hash table
  useEffect(
    // Function to run
    () => {
      if (count >= 1) {
        setColor('green');
      } else if (count < 0) {
        setColor('red');
      } else setColor(defaultColor)
    },
    // When does this rerun (What needs to change)
    [count]
  )


  return (
    <div className="App">
      <div className="wrapper">
        <div className="hdr">
          <h1>React Counter App</h1>
        </div>
        <div className="count">
          <span className="num" style = {{color: color}}>{count}</span>
        </div>
        <div className="btns">
          <button className="decrease" onClick={handleSubtract}>decrease</button>
          <button className="reset" onClick={handleReset}>reset</button>
          <button className="increase" onClick={handleIncrease}>increase</button>
        </div>
      </div>
    </div>
  );
}

export default App;
