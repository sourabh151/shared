import { createContext, useState } from "react"
import NavLinks from "./NavLinks"
import UserContainer from "./UserContainer"
export const NavbarContext = createContext();
function Navbar() {
  const [name, setName] = useState("sourabh")
  const logout = () => {
    setName("");
  }
  return (
    <NavbarContext.Provider value={{ name, logout }}>
      <div className="container">
        <nav className="navbar">
          <h5>Context API </h5>
          <div className="nav-container">
            <NavLinks />
            <UserContainer />
          </div>
        </nav>
      </div>
    </NavbarContext.Provider>
  )
}

export default Navbar
