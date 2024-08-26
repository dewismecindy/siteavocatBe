import React, { useState } from "react";
import { Link } from "react-router-dom";
import AquarelleAvocat from "../img/AvocatAccueil.png";
import Icon1 from "../img/document.png";
import Icon2 from "../img/hammer.png";
import Icon3 from "../img/law.png";
import Icon4 from "../img/prison (1).png";
import ImageActu1 from "../img/ImageActu1.jpeg";
import ImageActu2 from "../img/ImageActu2.jpg";
import ImageActu3 from "../img/ImageActu3.webp";
import Header from "../components/Header";
import DeuxCabinets from "./DeuxCabinet";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div>
      <Header />
      <hr
        style={{
          width: "100%",
          marginTop: "60px",
          borderTop: "1px solid #FBFCFC",
        }}
      />
      <div
        className="Présentation"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <img
            src={AquarelleAvocat}
            alt="AquarelleAvocat"
            style={{ width: "120%", float: "left", marginLeft: "10%" }}
            onLoad={handleImageLoad}
          />
        </div>

        <div style={{ width: "100%", paddingLeft: "10%" }}>
          <h3
            style={{
              fontFamily: "Montserrat",
              lineHeight: "21px",
              fontWeight: "normal",
              color: "#881106",
              fontSize: "1vw",
            }}
          >
            BARREAU DE TOURNAI
          </h3>
          <h1
            style={{
              fontFamily: "Prata",
              fontWeight: "normal",
              color: "#222222",
              marginTop: "20px",
              fontSize: "4vw",
            }}
          >
            Cabinet Avocats
            <br />
            Thomas Bocquet
          </h1>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: "normal",
              color: "#4F3D3A",
              textAlign: "justify",
              marginRight: "100px",
            }}
          >
            Le cabinet est en mesure de déterminer avec précision si vous êtes
            auteurs ou victimes d’un fait susceptible de revêtir une
            qualification d’infraction pénale, pour tous types d’infractions
          </p>
          <p style={{ margin: "10px 0" }}>
            <Link
              to="/cabinet"
              style={{
                textDecoration: "none",
                backgroundColor: "#800020",
                color: "white",
                marginTop: "40px",
                padding: "10px 40px",
                borderRadius: "20px",
                display: "inline-block",
              }}
            >
              Le Cabinet
            </Link>
          </p>
        </div>
      </div>
      <div
        className="SecondPart"
        style={{
          backgroundColor: "#F4F5F7",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        <h3
          style={{
            fontFamily: "Montserrat",
            fontSize: "1vw",
            lineHeight: "10px",
            fontWeight: "normal",
            color: "#881106",
            marginTop: "110px",
          }}
        >
          DROIT PENAL
        </h3>
        <h1
          style={{
            fontFamily: "Prata",
            fontSize: "50px",
            lineHeight: "4vw",
            fontWeight: "normal",
            color: "#222222",
            marginTop: "30px",
          }}
        >
          Pluricompétences <br /> en matière pénale
        </h1>{" "}
        <hr style={{ width: "100%", borderTop: "1px solid black" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "15px",
            lineHeight: "3vw",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "2px",
            }}
          >
            <Link to="/expertise">
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                  lineHeight: "3vw",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <img
                  src={Icon1}
                  alt="Icon 1"
                  style={{ width: "60%", height: "60%" }}
                />
              </div>
            </Link>
            <p
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "16px",
              }}
            >
              Procédure pénale <br /> et libertés <br />
              fondamentales
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "2px",
            }}
          >
            <Link to="/expertise">
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                }}
              >
                <img
                  src={Icon2}
                  alt="Icon 2"
                  style={{ width: "60%", height: "60%" }}
                />
              </div>
            </Link>
            <p
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "16px",
              }}
            >
              Crimes & délits
              <br /> commis contre les <br />
              personnes
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "2px",
            }}
          >
            <Link to="/expertise">
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                }}
              >
                <img
                  src={Icon3}
                  alt="Icon 3"
                  style={{ width: "60%", height: "60%" }}
                />
              </div>
            </Link>
            <p
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "16px",
              }}
            >
              Droit pénal des
              <br /> affaires et droit <br />
              pénal douanier
            </p>
          </div>
          <div
            style={{
              margin: "2px",
            }}
          >
            <Link to="/expertise">
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                }}
              >
                <img
                  src={Icon4}
                  alt="Icon 4"
                  style={{ width: "60%", height: "60%" }}
                />
              </div>
            </Link>
            <p
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "16px",
                margin: "2px",
              }}
            >
              Droit
              <br /> pénitentiaire, de
              <br /> l’exécution & de <br />
              l’application des <br />
              peines
            </p>
          </div>
        </div>
      </div>
      <div
        className="TroisiemePart"
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        <h3
          style={{
            fontFamily: "Montserrat",
            fontSize: "1vw",
            lineHeight: "21px",
            fontWeight: "normal",
            color: "#881106",
            marginTop: "110px",
          }}
        >
          DANS LES MEDIAS
        </h3>
        <h1
          style={{
            fontFamily: "Prata",
            fontSize: "3vw",
            lineHeight: "55px",
            fontWeight: "normal",
            color: "#222222",
            marginTop: "30px",
          }}
        >
          Les derniers <br /> articles
        </h1>
        <hr style={{ width: "100%", borderTop: "1px solid black" }} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "250px",
                height: "350px",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src={ImageActu1}
                alt="ImageActu1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <p
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "20px",
                lineHeight: "21px",
                fontWeight: "normal",
                color: "#881106",
              }}
            >
              Discours <br /> orateur de rentrée <br />
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "250px",
                height: "350px",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src={ImageActu2}
                alt="ImageActu2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <p
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "20px",
                lineHeight: "21px",
                fontWeight: "normal",
                color: "#881106",
              }}
            >
              Avec le cabinet <br /> SLaw de Liège
              <br />
              fondamentales
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "250px",
                height: "350px",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src={ImageActu3}
                alt="ImageActu3"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <p
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "20px",
                lineHeight: "21px",
                fontWeight: "normal",
                color: "#881106",
              }}
            >
              Concours
              <br /> "J'accuse" <br />
              Bruxelles
            </p>
          </div>
        </div>
      </div>
      <DeuxCabinets />
      Fondateur du cabinet, Maître Thomas Bocquet est avocat au barreau de
      Liège. Diplômé d’une Maîtrise en Droit Pénal de la faculté Bruxelle et
      d’un Master de Sciences Criminelles de l’Université de Lille, Maître
      Thomas Bocquet s’est toujours orienté vers la pratique du Droit Pénal.
      Durant son parcours, il a intégré le Cabinet Slaw à Liège avant de
      rejoindre, en 2018, le jeune barreau de Liège et en 2021 le conseil de
      l'ordre du barreau de Liège.
    </div>
  );
};

export default Home;
