import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Hamburger from "hamburger-react";
import "../assets/style/component.css";
import "../assets/style/navBar.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuVisibity, setMenuVisibity] = useState("invisible");
  const [scrolling, setScrolling] = useState(false)

  const navigate = useNavigate()


  useEffect(() => {
    // Fonction de gestion du défilement
    const handleScroll = () => {
        // Vérifie si la page a été défilée au moins un peu
         if (window.scrollY > 0) {
            setScrolling(true); // Met à jour l'état pour indiquer que le défilement a commencé
        } else {
            setScrolling(false); // Met à jour l'état pour indiquer que le défilement a cessé
        }



    };

    // Ajoute un écouteur d'événements de défilement à la fenêtre
    window.addEventListener('scroll', handleScroll);

    // Nettoyage : retirer l'écouteur d'événements lors du démontage du composant
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);



  const navScrollingStyle = {
    border: scrolling=== true? '1px solid rgba(0,0,0,0.5) ': 'none', 
    backgroundColor: scrolling === true? 'rgba(0,0,0,0.5)' : 'inherit'


  };

  return (
    <header className="header-container">
      <nav className="nav" style={navScrollingStyle}>
        <div className="burger_menu">
          <Hamburger
            color="#dadada"
            id="hamburger"
            toggled={isOpen}
            toggle={setIsOpen}
            onToggle={(toggled) => {
              if (toggled) {
                setMenuVisibity("visible");
              } else {
                setMenuVisibity("invisible");
              }
            }}
            size="16"
            className='huly'
          />
        </div>
        <div onClick={()=>navigate('/')}>
          <h4 className="theWhite">
            MITCODE <span className="lighter">Studios</span>
          </h4>
        </div>
        <div className="btn-contact">
          <p>contact me</p>
        </div>
      </nav>

      <div className="container-nav-menu" id={menuVisibity}>
        <div className="nav-menu">
          <ul className="ul_navBar" id="ul_navBar">
            <NavLink to="/#home" className="a">
              <li className="a5a li_navBar" id="li_navBar">
                home
              </li>
            </NavLink>

            <NavLink to="/#about" className="a">
              <li className="a4a li_navBar" id="li_navBar">
                about
              </li>
            </NavLink>

            <NavLink to="/#service" className="a">
              <li className="a3a li_navBar" id="li_navBar">
                service
              </li>
            </NavLink>

            <NavLink to="/#portfolio" className="a">
              <li className="a2a li_navBar" id="li_navBar">
                portfolio
              </li>
            </NavLink>

            <NavLink to="/#contact" className="a">
              <li className="a1a li_navBar contact" id="li_navBar">
                contact
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Menu;
