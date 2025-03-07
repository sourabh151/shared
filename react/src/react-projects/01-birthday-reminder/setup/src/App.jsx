import data from './data';
import List from './List';
import { useState } from 'react';
import "./index.css"
function App() {
  const [persons, setPersons] = useState(data);
  function removePerson(i){
    setPersons(persons.filter(({id})=>{
      return !(i==id)
    }))
  }
  return (
    <main>
      <section className='container'>
        <h3>{persons.length} birthdays today</h3>
        <List persons = {persons} removePerson = {removePerson}/>
        <button onClick={()=>setPersons([])}>clear</button>
      </section>
    </main>
  );
}

export default App;
