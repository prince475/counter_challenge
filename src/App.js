import { useState } from 'react';
import './App.css';

function App() {
  /**
   * Challenge: set up state to track our count (initial value is zero)
   * see if you can add 1 to the count
   */
  const [count, setCount] = useState(0)

  function handleAddition (){
    setCount(count + 1)
  }
  function handleSubtraction (){
    setCount(count - 1)
  }


  return (
    <div className="counter">
        <div className="challenge--title">
          <h1>Counter Challenge</h1>
        </div>
        <div className="button--container">
          <button className="counter--minus" onClick={handleSubtraction}>Decrement</button>

          <button className='counter--plus' onClick={handleAddition}>Increment</button>
        </div>

        <div className="counter--count">
          <h1>{count}</h1>
        </div>
    </div>
  );
}

export default App;
