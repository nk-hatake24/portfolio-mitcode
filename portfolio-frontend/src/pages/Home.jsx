import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/pages.css";
import Contact from "./Contact";
import Footer from "../component/Footer";
import About from "./About";
import Portfolio from "./Portfolio";
import pic from '../assets/mitcode_pec.png'

function Home() {
  return (
    <>
      <section id="home">
        <div className="home_container">
          <div className="home-intro">
            <h1 className="home-intro-h1">web developpement studios</h1>
            <p className="home-intro-p">
            Welcome to the future of web innovation! Here at our studio,
             we transform your digital dreams into stunning realities. 
             Dive into our portfolio and discover how we blend cutting-edge 
             technology with creative design to craft websites that captivate and engage. 
            Let's create something amazing together
            </p>
            
            <div className="home-intro-btn">
              <div className="home-intro-btn-portfolio">
                <Link to="/#portfolio">Take a dive in my universe</Link>
              </div>
              <div className="home-intro-btn-service">
                <Link to="/#service">See services</Link>
              </div>
            </div>
          </div>
          <div className="intro-image">
            <div><img src={pic} alt="only me" /></div>
            
          </div>
        </div>
      </section>
      <About />
      <Portfolio />
      {/* <section id="service">service</section> */}
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
