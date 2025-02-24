import React from 'react'
import logo from "../images/logo.svg"
import { navIcons, navLinks } from './data'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle" onClick={(e) => {
                        document.getElementById("nav-links").classList.toggle("show-links")
                    }}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <ul className="nav-links" id="nav-links">
                    {navLinks.map((link) => {
                        return <li key={link} onClick={(e) => {
                            document.getElementById("nav-links").classList.remove("show-links")
                        }}>
                            <a href={`#${link}`} className="nav-link"> {link} </a>
                        </li>
                    })}
                </ul>

                <ul className="nav-icons">
                    {
                        navIcons.map((item) => {
                            return <li key={item.href}>
                                <a href={item.href} target="_blank" className="nav-icon"
                                ><i className={item.icon}></i
                                ></a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar