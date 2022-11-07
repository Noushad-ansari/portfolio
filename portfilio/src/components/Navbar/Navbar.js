import { useContext } from "react";
import React, { NavLink } from 'react'
import Toggle from '../Toggle/Toggle'
import NavItems from './NavItems'
import "./navbar.css"
import { ThemeContext } from '../../Context';




function Navbar() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const navBg = darkMode ? "darkNav" :"bg-light"
    const navText = darkMode ? "text-white" :"text-yellow"
    return (
        <nav className={` navbar navbar-expand-lg navbar-light bg- fixed-top  ${navBg}` }id='nav_Wrapper' >
            <Toggle />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav  w-100 d-flex justify-content-center ">
                    {NavItems.map(navItem => (
                        <li key={navItem.id} className="nav-item active  text-center">
                            <a className={`nav-link  pl-3 ${navText} `} id='menuName' href="/"> {navItem.name} <span className="sr-only">(current)</span></a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar