import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App";
import Logo from "../img/logoLiberis.mp4";
// import MobileLogo from "../img/iconMenu.png";

const HeaderArabe = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className={`header ${showMenu ? "mobile-menu" : ""}`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Prata, serif",
        backgroundColor: "#fff",
        padding: "20px",
      }}
    >
      <Link to="/HomeArabe" style={{ marginTop: "20px" }}>
        <div className="logo">
          <video width="160px" height="160px" autoPlay muted>
            <source src={Logo} type="video/mp4" />
          </video>
        </div>
      </Link>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a
              href="/CabinetArabe"
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: "#555", // Couleur de texte grise
                marginRight: "20px",
                transition: "color 0.3s ease", // Transition de couleur de texte
              }}
              onMouseEnter={(e) => (e.target.style.color = "#007bff")} // Couleur de texte bleue au survol
              onMouseLeave={(e) => (e.target.style.color = "#555")} // Retour à la couleur de texte grise
            >
              المكتب القانوني
            </a>
          </li>
          <li>
            <a
              href="/ExpertiseArabe"
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: "#555", // Couleur de texte grise
                marginRight: "20px",
                transition: "color 0.3s ease", // Transition de couleur de texte
              }}
              onMouseEnter={(e) => (e.target.style.color = "#007bff")} // Couleur de texte bleue au survol
              onMouseLeave={(e) => (e.target.style.color = "#555")} // Retour à la couleur de texte grise
            >
              خبرتنا
            </a>
          </li>
          <li>
            <a
              href="/ActualitesArabe"
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: "#555", // Couleur de texte grise
                marginRight: "20px",
                transition: "color 0.3s ease", // Transition de couleur de texte
              }}
              onMouseEnter={(e) => (e.target.style.color = "#007bff")} // Couleur de texte bleue au survol
              onMouseLeave={(e) => (e.target.style.color = "#555")} // Retour à la couleur de texte grise
            >
              أخبارنا
            </a>
          </li>
          <li>
            <a
              href="/ContactArabe"
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: "#555", // Couleur de texte grise
                marginRight: "20px",
                transition: "color 0.3s ease", // Transition de couleur de texte
              }}
              onMouseEnter={(e) => (e.target.style.color = "#007bff")} // Couleur de texte bleue au survol
              onMouseLeave={(e) => (e.target.style.color = "#555")} // Retour à la couleur de texte grise
            >
              اتصل بنا
            </a>
          </li>
          <li>
            <div className="language-buttons">
              <a
                href="/"
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "inherit",
                  marginRight: "10px",
                  padding: "5px 10px",
                  border: "1px solid transparent",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#f0f0f0")
                } // Couleur de fond gris clair au survol
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                } // Retour à la couleur de fond transparente
                translate="no"
              >
                FR
              </a>
              <a
                href="/HomeEnglish"
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "inherit",
                  marginRight: "10px",
                  padding: "5px 10px",
                  border: "1px solid transparent",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#f0f0f0")
                } // Couleur de fond gris clair au survol
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                } // Retour à la couleur de fond transparente
                translate="no"
              >
                EN
              </a>
              <a
                href="/CabinetNerland"
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "inherit",
                  marginRight: "10px",
                  padding: "5px 10px",
                  border: "1px solid transparent",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#f0f0f0")
                } // Couleur de fond gris clair au survol
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                } // Retour à la couleur de fond transparente
                translate="no"
              >
                NL
              </a>
              <a
                href="/CabinetArabe"
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "inherit",
                  padding: "5px 10px",
                  border: "1px solid transparent",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#f0f0f0")
                } // Couleur de fond gris clair au survol
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                } // Retour à la couleur de fond transparente
                translate="no"
              >
                AR
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="burger-icon"></div>
      </div>

      {/* <div className="mobile-logo">
        <a href="/menu">
          <img src={MobileLogo} alt="Flaticon Logo" />
        </a>
      </div> */}
    </header>
  );
};

export default HeaderArabe;
