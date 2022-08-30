import styles from './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleSubtract = () => {
    setCount(count - 1);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  let color = '#fff';
  if (count >= 1) {
    color = 'green'
  } else if (count < 0) {
    color = 'red'
  } else 
    color = 'white'

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
