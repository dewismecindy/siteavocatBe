import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageCabinet from "../img/balanceJustice.png";
import ImageThomas from "../img/Thomas.jpg";
import ImageActu1 from "../img/ImageActu1.jpeg";
import ImageActu2 from "../img/ImageActu2.jpg";
import ImageActu3 from "../img/ImageActu3.webp";
import Header from "../components/Header";
import DeuxCabinets from "../components/DeuxCabinet";

const Cabinet = () => {
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
            src={ImageCabinet}
            alt="ImageCabinet"
            style={{ width: "100%", float: "left", marginLeft: "10%" }}
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
            LE CABINET
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
            Un Cabinet <br />
            dédié
            <br /> au droit pénal
          </h1>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: "normal",
              color: "#4F3D3A",
              textAlign: "justify",
              marginRight: "20%",
            }}
          >
            Vos avocats vous défendent et vous assistent dès les soupçons d’une
            infraction commise par ou sur vous. Une assistance personnalisée est
            garantie à tous les stades de la procédure et notamment des
            poursuites devant les juridictions (Tribunal de police, Tribunal
            pour enfants, Tribunal correctionnel, Cour d’assises). Vos avocats
            vous défendent également si vous êtes victime d’une infraction, en
            vue d’obtenir une juste et complète réparation de votre préjudice.
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
              En savoir plus
            </Link>
          </p>
        </div>
      </div>

      <div
        className="SecondPart"
        style={{
          backgroundColor: "#f4F5F7",
          padding: "10%",
          marginTop: "40px",
        }}
      >
        <div>
          <img
            src={ImageThomas}
            alt="ImageMeBocquet"
            style={{
              width: "300px",
              height: "450px",
              borderRadius: "10%",
              backgroundColor: "white",
              display: "flex",
              flex: "wrap",
              marginTop: "30px",
            }}
          />
        </div>
        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "3vw",
            lineHeight: "10px",
            fontWeight: "initial",
            color: "#222222",
            marginTop: "10%",
          }}
        >
          Me Thomas Bocquet <br />
        </h1>{" "}
        <h3
          style={{
            fontFamily: "Montserrat",
            fontSize: "2vw",
            lineHeight: "10px",
            fontWeight: "initial",
            color: "#881106",
            marginTop: "2%",
          }}
        >
          Avocat au Barreau de Liège
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* Colonne de texte à droite */}
            <div
              style={{
                width: "45%",
                fontFamily: "Montserrat",
                fontSize: "14px",
              }}
            >
              <p style={{ textAlign: "justify" }}>
                Fondateur du cabinet, Maître Maxence Pascal est avocat au
                barreau de Lyon. Diplômé d’une Maîtrise en Droit Pénal de la
                faculté d’Aix-en-Provence et d’un Master de Sciences Criminelles
                de l’Université de Paris X, Maître Maxence Pascal s’est toujours
                orienté vers la pratique du Droit Pénal.
              </p>
              <p style={{ textAlign: "justify" }}>
                Durant son parcours, il a intégré le Cabinet Gueguen-Carrol à
                Paris avant de rejoindre, en 2012, un cabinet lyonnais
                spécialisé en procédure pénale.
              </p>
            </div>
            {/* Colonne de texte à gauche */}
            <div
              style={{
                width: "45%",
                fontFamily: "Montserrat",
                fontSize: "14px",
              }}
            >
              <p style={{ textAlign: "justify" }}>
                Ancien chargé d’enseignement à l’Université Lyon II et
                co-président de la Commission Pénale de l’École des Avocats,
                Maître Maxence Pascal justifie aussi d’une formation variée au
                sein de la Direction Interrégionale des Services Pénitentiaires
                de Lyon (DISP), de la Maison d’arrêt de Lyon-Corbas et de la
                Juridiction Interrégionale Spécialisée (JIRS) du Tribunal
                Correctionnel de Lyon.
              </p>
              <p style={{ textAlign: "justify" }}>
                Ces dernières expériences l’ont amené à s’ouvrir sur le jugement
                puis sur le parcours d’exécution des peines des condamnés.
              </p>
            </div>
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
            fontSize: "14px",
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
            lineHeight: "3vw",
            fontWeight: "normal",
            color: "#222222",
            marginTop: "2%",
            marginBottom: "4%",
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
            marginTop: "4%",
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
};

export default Cabinet;
