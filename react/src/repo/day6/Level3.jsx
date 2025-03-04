import { tenHighestPopulation } from "./Level3-data.js"
import "./style.css"
const { population: worldPopulation } = tenHighestPopulation.find(({ country }) => country === "World")

function Level3() {
  function calculateWidth(p) {
    return ((p / worldPopulation * 100) + "%")
  }
  return (
    <div className='block'>
      <h2>World Population</h2>
      <h3>Ten Most Populated Countries </h3>
      <ul>
        {tenHighestPopulation.map(({ country, population }) => {
          return <li key={population} className="row">
            <p>{country}</p>
            <div className="outer">
              {console.log(calculateWidth(population))}
              <div className="inner" style={{ width: calculateWidth(population) }}>
              </div>
            </div>
            <p>{population}</p>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Level3
