import React from 'react'
import { navIcons, navLinks } from './data'

function Footer() {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {
                    navLinks.map((link) => {
                        return <li key={link}>
                            <a href={`#${link}`} className="footer-link"> {link} </a>
                        </li>
                    })
                }
            </ul>
            <ul className="footer-icons">
                {
                    navIcons.map((item) => {
                        return <li key={item.href}>
                            <a href={item.href} target="_blank" className="footer-icon">
                                <i className={item.icon}></i></a>
                        </li>
                    })
                }
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer