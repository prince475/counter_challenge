import { useState } from 'react';
import './App.css';

function App() {
  /**
   * Challenge: set up state to track our count (initial value is zero)
   * see if you can add 1 to the count
   */

  /**
   * Note: if you need the old value of state
   * to help you determine the new value of state,
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.
   */

  const [count, setCount] = useState(0)
  // one way of doing

  // function handleAddition (){
  //   setCount(count + 1)
  // }
  // function handleSubtraction (){
  //   setCount(count - 1)
  // }

  // best practice

  function handleAddition() {
    setCount(prevCount => prevCount + 1)
  }


  function handleSubtraction() {
    setCount(prevCount => prevCount - 1)
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
