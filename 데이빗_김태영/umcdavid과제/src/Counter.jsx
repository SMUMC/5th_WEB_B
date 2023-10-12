import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    console.log("increase가 클릭됨");
   
  };
  const decrement = () => {
    setCount(count - 1);
    console.log("decrease가 클릭됨")
   
  };

  return (
    <div id="re">
      <h1>데이빗의 카운터</h1>
      <h1><span>{count}</span></h1>
      <button onClick={increment}>+</button>
      
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
