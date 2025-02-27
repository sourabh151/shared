import { useState } from 'react';

const UseStateObject = () => {
  const [user,setUser] = useState({
    name:"john",
    hobby:"soccer"
  })
  function handleClick(){
    setUser({
      name:"sourabh",
      hobby:"chess"
    });
  }
  return (
  <div>
      {console.log("rerendered")}
      <h3>{user.name}</h3>
      <p>hobby is : {user.hobby}</p>
      <button className='btn' onClick={handleClick}>click me </button>
  </div>
  )
};

export default UseStateObject;
