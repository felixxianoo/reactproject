import styles from './App.css';
import React, {useState} from 'react';
import { useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let timer;
  useEffect(() => {
  timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer)
  })

  const pause = () => {
    clearInterval(timer);
  }

  const reset = () => {
    setMinutes(0);
    setSeconds(0);
  }


  return (
    <div className="App">
      <div className="wrapper">
        <div className="hdr">
          <h1>React Timer App</h1>
        </div>
        <div className="count">
          <span className='num'>
            {minutes < 10 ? '0' + minutes : minutes}:
            {seconds < 10 ? '0' + seconds : seconds}
            </span>
        </div>
        <div className="btns">
          <button onClick={pause}>pause</button>
          <button onClick={reset}>reset</button>
          <button>start</button>
        </div>
      </div>
    </div>
  );
}

export default App;
