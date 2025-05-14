import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import "./Home.css"
function Home() {
  return (
    <div className="w-screen min-h-screen Home">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Home
