// import { useLowerStateContext } from ".";

const Person = ({ name ,id,removeUser}) => {
  // const { removeUser } = useLowerStateContext();
  return (
    <div>
      <h4>{name}</h4>
      <button className="btn" onClick={() => removeUser(id)}>remove</button>
    </div>
  );
};
export default Person;
