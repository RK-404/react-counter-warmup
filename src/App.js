import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addCounter = () => {
    setCount(count + 1);
  }

  const multiplyCounter = () => {
    setCount(count * 2);
  }

  return (
    <div className="App">
      <div className="number">{count}</div>
      <div className="buttons-container">
        <div className="counter-button" onClick={addCounter}>+1</div>
        <div className="counter-button blue" onClick={multiplyCounter}>x2</div>
      </div>
    </div>
  );
}

export default App;
