import React from 'react'
import '../assets/style/footer.css'

import { FaFacebook, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer id="footer-container">
      <div id="menu-footer">
        <div>ABOUT</div>
        <div>SERVICES</div>
        <div>PORTFOLIO</div>
        <div>CONTACT</div>
      </div>
      <div id="social-media-footer">
        <FaFacebook className='social-media-footer-facebook'/>
        <FaTwitter className="social-media-footer-twitter"/>
        <FaLinkedinIn className="social-media-footer-lindkedIn"/>
        <FaWhatsapp className="social-media-footer-whatsapp"/>
      </div>

      <div id='copyright'>&copy; 2024 MITCODE</div>
    </footer>
  )
}

export default Footer