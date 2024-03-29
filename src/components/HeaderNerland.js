import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App";
import Logo from "../img/logoLiberis.mp4";
import MobileLogo from "../img/iconMenu.png";

const HeaderNerland = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleContactLinkClick = () => {
    const contactTitleElement = document.getElementById("contact-title");
    if (contactTitleElement) {
      contactTitleElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${showMenu ? "mobile-menu" : ""}`}>
      <Link to="/HomeNerland" style={{ marginTop: "20px" }}>
        <div className="logo">
          <video width="160px" height="160px" autoPlay muted>
            <source src={Logo} type="video/mp4" />
          </video>
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <a href="/CabinetNerland" style={{ fontSize: "14px" }}>
              Het Kabinet
            </a>
          </li>
          <li>
            <a href="/ExpertiseNerland" style={{ fontSize: "14px" }}>
              Onze Expertise
            </a>
          </li>
          <li>
            <a href="/ActualitesNerland " style={{ fontSize: "14px" }}>
              Onze Actualiteiten
            </a>
          </li>
          <li>
            <Link
              to="/HomeNerland/#contact-title"
              onClick={handleContactLinkClick}
            >
              Neem Contact op met Ons
            </Link>
          </li>

          <li>
            <div className="language-buttons">
              <a href="/" style={{ fontSize: "14px" }}>
                FR/
              </a>
              <a href="/HomeEnglish" style={{ fontSize: "14px" }}>
                EN/
              </a>
              <a href="/HomeNerland" style={{ fontSize: "14px" }}>
                NL/
              </a>
              <a href="/HomeArabe" style={{ fontSize: "14px" }}>
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

export default HeaderNerland;
