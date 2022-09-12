import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

function Counter() {
  const [count, setCount] = useState(0);

  // function increment() {
  //   // call setCount twice, to update the counter by two every time we click
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }
  function increment() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  }

  return <div onClick={increment}>{count}</div>;
}

export default Counter;
