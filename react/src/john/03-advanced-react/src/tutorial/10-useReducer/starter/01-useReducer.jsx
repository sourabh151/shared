import { useReducer } from 'react';
import { data } from '../../../data';
"../../../index.css";
const reducer = (state, action) => {
  if (action.type === "CLEAR_ITEMS") {
    return { ...state, data: [] }
  }
  else if (action.type === "RESET_ITEMS") {
    return { ...state, data: data }
  }
  else if (action.type === "REMOVE_ITEM") {
    const newPeople = state.data.filter((person) => !(person.id === action.payload.id))
    return { ...state, data: newPeople }
  }
}
const initialState = {
  data: data,
}
const ReducerBasics = () => {
  //const [people, setPeople] = React.useState(data);
  const [people, dispatch] = useReducer(reducer, initialState)
  //const removeItem = (id) => {
  //  let newPeople = people.filter((person) => person.id !== id);
  //  setPeople(newPeople);
  //};
  //const clearItem = () => {
  //  setPeople([]);
  //}
  //const resetItem = () => {
  //  setPeople(data);
  //};
  return (
    <div>
      {people.data.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => dispatch({ type: "REMOVE_ITEM", payload: { id } })}>remove</button>
          </div>
        );
      })}
      {
        people.data.length ?
          <button className='btn' onClick={() => dispatch({ type: "CLEAR_ITEMS" })}>clear</button> :
          <button className='btn' onClick={() => dispatch({ type: "RESET_ITEMS" })}>reset</button>
      }
    </div>
  );
};

export default ReducerBasics;
