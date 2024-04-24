import React from "react";
import "../assets/style/footer.css";

import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

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
        <div className="social-media-container pointer">
        <a href="https://github.com/nk-hatake24"> <FaGithub className="social-media-footer-facebook" /></a> 
        </div>
        
        <div className="social-media-container pointer"><FaTwitter className="social-media-footer-twitter" /></div>
        <div className="social-media-container pointer"><FaLinkedinIn className="social-media-footer-lindkedIn" /></div>
        <div className="social-media-container pointer"><FaWhatsapp className="social-media-footer-whatsapp" /></div>
        
        
      </div>

      <div id="copyright">&copy; 2024 MITCODE</div>
    </footer>
  );
};

export default Footer;
