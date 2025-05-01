//import React from 'react'

import { useRef } from "react"
import { FaHamburger } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"

function Navbar() {
  const navMenu = useRef<null | HTMLInputElement>(null);
  function handleLinkClick() {
    if (navMenu.current) {
      navMenu.current.checked = false;
    }
  }
  return (
    <>
      <nav className='w-full py-4 px-8 shadow-lg shadow-myAccent/50 font-semibold flex flex-col md:flex-row sticky top-0 bg-white/80'>
        <input type="checkbox" id="nav-menu" className="hidden peer" ref={navMenu} />
        <label htmlFor="nav-menu">
          <FaHamburger className="text-4xl text-myAccent md:hidden" />
        </label>
        <ul className={"hidden peer-checked:block bg-white mt-4 border border-myAccent rounded-md md:flex md:flex-row md:justify-around w-full"}>
          <li className="px-2 py-1 m-2 border border-myText rounded-md"><NavLink to={"/"} onClick={() => { handleLinkClick() }}>Home</NavLink></li>
          <li className="px-2 py-1 m-2 border border-myText rounded-md"><NavLink to={"about"} onClick={() => { handleLinkClick() }}>About</NavLink></li>
          <li className="px-2 py-1 m-2 border border-myText rounded-md"><NavLink to={"projects"} onClick={() => { handleLinkClick() }}>Projects</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
