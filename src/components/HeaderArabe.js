import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App";
import Logo from "../img/logoLiberis.mp4";
import MobileLogo from "../img/iconMenu.png";

const HeaderArabe = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`header ${showMenu ? "mobile-menu" : ""}`}>
      <Link to="/" style={{ marginTop: "20px" }}>
        <div className="logo">
          <video width="160px" height="160px" autoPlay muted>
            <source src={Logo} type="video/mp4" />
          </video>
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <a href="/cabinet" style={{ fontSize: "14px" }}>
              Le Cabinet
            </a>
          </li>
          <li>
            <a href="/expertise" style={{ fontSize: "14px" }}>
              Notre Expertise
            </a>
          </li>
          <li>
            <a href="/actualites" style={{ fontSize: "14px" }}>
              Nos Actualités
            </a>
          </li>
          <li>
            <a href="/#contact-title" style={{ fontSize: "14px" }}>
              Nous Contacter
            </a>
          </li>

          <li>
            <div className="language-buttons">
              <a href="/" style={{ fontSize: "14px" }}>
                FR
              </a>
              <a href="/HomeEnglish" style={{ fontSize: "14px" }}>
                EN
              </a>
              <a href="/CabinetNerland" style={{ fontSize: "14px" }}>
                NL
              </a>
              <a href="/CabinetArabe" style={{ fontSize: "14px" }}>
                AR
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="burger-icon"></div>
      </div>

      <div className="mobile-logo">
        <a href="/menu">
          <img src={MobileLogo} alt="Flaticon Logo" />
        </a>
      </div>
    </header>
  );
};

export default HeaderArabe;
