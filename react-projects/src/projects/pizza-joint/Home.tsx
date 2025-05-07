import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import "./Home.css"
function Home() {
  return (
    <div className="w-screen h-screen Home">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Home
