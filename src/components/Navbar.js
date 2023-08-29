import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);

    const [color, setColor] = useState(false);
    const chnageColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", chnageColor);

  return (
      <div className={color ? "header header-bg" : "header"}>
          <Link to="/">
              <h1>Portfolio</h1>
          </Link>
          <u1 className={click ? "nav-menu active" : "nav-menu"}>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/project">Project</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
          </u1>
          <div className="hamburger" onClick={handleClick}>
              {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)} 

              
          </div>
      </div>
  )
}

export default Navbar;