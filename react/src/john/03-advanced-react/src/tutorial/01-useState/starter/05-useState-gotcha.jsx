import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // setTimeout(() => {
    // console.log('clicked the button');
    //   setValue(value + 1);
    // }, 3000);
    setTimeout(() => {
      console.log('clicked the button');
      setCount((currentState) => {
        return currentState + 1;
      });
      console.log(count)
    }, 3000);
  };
  return <div>
    <h3>{count}</h3>
    <button className="btn" onClick={handleClick}>increment</button>
  </div>
};

export default UseStateGotcha;
