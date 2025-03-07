import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleChange(e) {
    if (e.target.id === "name") {
      setName(e.target.value)
    }
    else if (e.target.id === "email") {
      setEmail(e.target.value)
    }
  }
  return <form className="form">
    <h4>controlled inputs</h4>
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        name
      </label>
      <input type="text" className="form-input" id="name" value={name} onChange={handleChange} />
    </div>
    <div className="form-row">
      <label htmlFor="email" className="form-label">
        email
      </label>
      <input type="email" className="form-input" id="email" value={email} onChange={handleChange} />
    </div>
    <button type="submit" className="btn btn-block">submit</button>
  </form>

};
export default ControlledInputs;
