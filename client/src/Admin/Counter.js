import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named 'count' initialized to 0, and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to increase count
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Function to decrease count
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {/* <h2>Counter</h2>
      <div>
        <button onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div> */}

<h1>Heading {count}</h1>
        <div>
        <button onClick={increaseCount}>Increase</button></div>
        <div><br/>
        <button onClick={decreaseCount}>decrease</button>
        </div>
    </div>
  );
}

export default Counter;
