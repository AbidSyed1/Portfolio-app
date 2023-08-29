import { FaHome, FaPhone ,FaMailBulk, FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa"
import "./FooterStyle.css"

import React from 'react'

const Footer = () => {
  return (
      <div className="footer">
          <div className="footer-container">
              <div className="left">
                  <div className="location">
                      <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                      <div>
                          <p>12-5-188/1/2, south lalaguda.</p>
                          <p>Hyderabad. </p>
                      </div>
                  </div>
                  <div className="phone">
                          <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 7899-236-569</h4>
         
                    </div>
                    <div className="email">
                          <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />  work@gmail.com</h4>
         
                    </div>
              </div>

                <div className="right">
                    <h4>About the company</h4>
                        <p>This is me Syed Abid Ali. Searching for the apportunity where i can start my career. I enjoy Creating new Projects and Designs Challenges. </p>
                        <div className="social">
                            <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 
                            <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 
                            <FaTelegram size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 
                        </div>
                </div>
          </div>
    </div>
  )
}

export default Footer