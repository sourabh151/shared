import { useState } from "react";
import { data } from "../../../data.js"
import { FaTrashCan } from "react-icons/fa6"
const UserChallenge = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return;
    }
    setPeople([{ id: Date.now(), name: name }, ...people])
    setName("")
  }
  function handleDelete(i) {
    setPeople(people.filter(({ id }) => !(i == id)))
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {
        <ul className="users">
          {
            people.map(({ id, name }) => {
              return <li key={id}>
                <p>{name}</p>
                <FaTrashCan style={{
                  marginLeft: "auto",
                  width: "20px",
                  height: "20px"
                }} onClick={() => handleDelete(id)} />
              </li>
            })
          }
        </ul>
      }
    </div>
  );
};
export default UserChallenge;
