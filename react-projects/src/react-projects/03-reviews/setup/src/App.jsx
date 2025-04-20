import React, { useState } from 'react';
import Review from './Review';
import "./index.css"
import data from "./data"
function App() {
  const [user, setUser] = useState(data[0])
  function prevUser(i) {
    let ind = data.findIndex((u) => {
      return i == u.id;
    })
    ind = ind === 0 ? data.length - 1 : ind - 1;
    setUser(data[ind]);
  }
  function nextUser(i) {
    let ind = data.findIndex((u) => {
      return i == u.id;
    })
    ind = ind == (data.length - 1) ? 0 : ind + 1;
    setUser(data[ind]);
  }
  function randomUser(i) {
    let ind = data.findIndex((u) => {
      return i == u.id;
    })
    let randInd = ind;
    while (ind === randInd) {
      randInd = Math.floor(Math.random() * data.length);
    }
    setUser(data[randInd]);
  }
  return <main>
    <section className='container'>
      <div className='title'>
        <h2>Our Reviews</h2>
        <div className='underline'></div>
      </div>
      <Review {...user} prevUser={prevUser} nextUser={nextUser} randomUser={randomUser} />
    </section>
  </main>
}

export default App;
