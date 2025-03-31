import { useCallback, useState, createContext, useContext, useMemo, } from 'react';
import { data } from '../../../../data';
import List from './List';

// const lowerStateContext = createContext();

// export const useLowerStateContext = () => {
//   return useContext(lowerStateContext);
// }
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const expensive = useMemo(() => {
    let i = count;
    for (let index = 0; index < 1000000000; index++) {
      i++;
    }
    return i;
  }, [count])
  console.log(expensive);

  const removeUser = useCallback(function removeUser(id) {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }, [people]);



  return (
    // <lowerStateContext.Provider value={{ removeUser }}>
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removeUser={removeUser} />
    </section>
    // </lowerStateContext.Provider>
  );
};
export default LowerState;
