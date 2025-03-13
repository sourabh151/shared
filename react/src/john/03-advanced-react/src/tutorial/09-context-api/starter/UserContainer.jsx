import { useContext } from "react"
import { NavbarContext } from "./Navbar"

function UserContainer() {
  const { name, logout } = useContext(NavbarContext)
  return (
    <div className="user-container">
      {name ? <>
        <p>Hello there., {name}</p>
        <button className="btn" onClick={() => logout()}>logout</button>
      </> : <p>please login</p>}
    </div>
  )
}

export default UserContainer
