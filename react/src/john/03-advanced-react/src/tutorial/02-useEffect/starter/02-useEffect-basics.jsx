import { useEffect, useState } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [second, setSecond] = useState(0);
  // const sayHello = () => {
  //   console.log('hello there');
  // };

  // sayHello();
  useEffect(() => {
    console.log("hello from useEffect");
  }, [value])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => {
        return setValue(value + 1)
      }}>
        {
          console.log(value)
        }
        click me
      </button>
      <h1>value : {second}</h1>
      <button className='btn' onClick={() => setSecond(second + 1)}>
        second
      </button>
    </div>
  );
};
export default UseEffectBasics;
