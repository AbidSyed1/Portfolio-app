import "./HeroImgStyles.css";

import React from 'react'; 

import IntroImg from '../assets/intro-bg.jpeg';
  
import { Link, NavLink } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask"> 
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content"> 
        <p> Hi!   I'M A SYED ABID ALI</p>
        <h1>React Developer</h1>
        <div>
          <NavLink to="/project" className="btn" >Project</NavLink>
          <NavLink to="/contact" className="btn btn-light" >Contact</NavLink>
        </div>
      </div>
    </div>
  );
}
export default Heroimg;