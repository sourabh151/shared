import React, { useState } from 'react';
import data from './data';
import "./index.css"
function App() {
  const [amount, setAmount] = useState(0);
  const [para, setPara] = useState([]);
  function handleChange(e) {
    let n = Number(e.target.value);
    if (n < 0) {
      return setAmount(0);
    }
    // if (n > 8) {
    //   n = 8;
    // }
    setAmount(n);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let p = [];
    let c = 0
    for (let i = 0; i < amount; i++) {
      if (c == 8) {
        c = 0;
      }
      p.push(data[c]);
      c++;
    }
    setPara(p);
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs</label>
        <input type="number" id="amount" name='amount' value={amount} onChange={handleChange} />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {
          para.map((d, i) => {
            return <p key={i}>{d}</p>
          })
        }
      </article>
    </section>
  )
}

export default App;
//section .section-center
//  h3 tired of boring lorm ipsum?
//  form .lorem-form
//    label for amount paragraphs
//    input #amount type number value
//    button .btn
//  article .lorem-text
//    p