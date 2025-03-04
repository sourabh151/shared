import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  function logout() {
    setUser(null);
  }
  function login(e) {
    e.preventDefault();
    let userName = document.querySelector("#name").value;
    setUser({
      name: userName,
    })
  }

  return user ? <div className="alert alert-success">
    <h2>hello {user.name}</h2>
    <button onClick={() => logout()} className="btn">logout</button>
  </div> : <form className="alert alert-success" onSubmit={(e) => login(e)} style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
    }}>
    <h2 htmlFor="name">name</h2>
    <input id="name" />
    <button type="submit" className="btn">sign in</button>
  </form>
};

export default UserChallenge;
