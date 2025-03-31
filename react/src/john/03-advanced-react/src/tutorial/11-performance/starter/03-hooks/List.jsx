import Item from './Person';
import {memo} from "react"
const List = ({ people ,removeUser}) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removeUser={removeUser}/>;
      })}
    </div>
  );
};
export default memo(List);
