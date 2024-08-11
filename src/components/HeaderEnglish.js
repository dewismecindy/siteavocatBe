import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App";
import Logo from "../img/logoLiberis.mp4";
// import MobileLogo from "../img/iconMenu.png";

const HeaderEnglish = () => {
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
      <Link to="/HomeEnglish" style={{ marginTop: "20px" }}>
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
              href="/CabinetEnglish"
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: "#555",
                marginRight: "20px",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#007bff")}
              onMouseLeave={(e) => (e.target.style.color = "#555")}
            >
              The law firm
            </a>
          </li>
          <li>
            <a
              href="/ExpertiseEnglish"
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: "#555",
                marginRight: "20px",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#007bff")}
              onMouseLeave={(e) => (e.target.style.color = "#555")}
            >
              Our expertise
            </a>
          </li>
          <li>
            <a
              href="/ActualitesEnglish"
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: "#555",
                marginRight: "20px",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#007bff")}
              onMouseLeave={(e) => (e.target.style.color = "#555")}
            >
              Our News
            </a>
          </li>
          <li>
            <a
              href="/ContactEnglish"
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: "#555",
                marginRight: "20px",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#007bff")}
              onMouseLeave={(e) => (e.target.style.color = "#555")}
            >
              Contact us
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
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
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
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
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
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
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
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
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

export default HeaderEnglish;
