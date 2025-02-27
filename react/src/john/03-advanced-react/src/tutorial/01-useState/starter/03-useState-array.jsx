import { useState } from "react";
import { data } from "../../../data.js";
const UseStateArray = () => {
  const [d, setD] = useState(data);
  function handleClick(e) {
    setD(d.filter(({ id }) => id !== Number(e.target.dataset.id)))
  }
  return (
    <div>
      {d.map(({ id, name }) => {
        return <div key={id}>
          <h3>{id}</h3>
          <p>{name}</p>
          <button className="btn" data-id={id} onClick={handleClick}>delete</button>
        </div>
      })}
    </div>
  )
};

export default UseStateArray;
