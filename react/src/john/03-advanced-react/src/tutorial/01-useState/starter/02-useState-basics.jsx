import { useState } from "react";

const UseStateBasics = () => {
  let [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrement} className="btn">increment</button>
      <button onClick={handleDecrement} className="btn">decrement</button>
    </div>);
};

export default UseStateBasics;
