import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import "./index.css"
import data from "./data.js"
import "./scripts/scroll-effect.js"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/react-tours-project'



function App() {
  const [tours, setTours] = useState(null);
  const [loading, isLoading] = useState(true);
  const loadTours = () => {
    setTimeout(() => {
      isLoading(false);
      setTours(data);
    }, 1000)
  }
  function deleteTour(i) {
    setTours(tours.filter(({ id }) => !(i == id)))
  }
  useEffect(() => {
    loadTours();
  }, [])
  return <main className="md:w-[100%] px-6 py-4">
    {loading && <Loading />}
    {loading || <Tours tours={tours} deleteTour={deleteTour} />}
    <button className="btn" onClick={() => loadTours()}>reload tours</button>
  </main>
}

export default App
