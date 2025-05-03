import React, { useEffect, useState } from 'react';

const Tour = ({ name, info, image, price, id, deleteTour }) => {
  const portion = info.slice(0, 140) + "...";
  const [hide, setHide] = useState(true);
  return <article className='single-tour scroll-effect' onClick={(e) => {
    console.log(e.target.getBoundingClientRect())
  }}>
    <img alt={name} src={image} ></img>
    <footer>
      <div className="tour-info" >
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{hide ? portion : info}<button onClick={() => setHide(!hide)}>{hide ? "show" : "hide"}</button></p>
      <button className='delete-btn' onClick={() => deleteTour(id)}>not interested</button>
    </footer>
  </article>;
};

export default Tour;
