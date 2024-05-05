import React, { useState } from "react";
import { Link } from "react-router-dom";
import Palais from "../img/palais1.png";
import Icon1 from "../img/document.png";
import Icon2 from "../img/hammer.png";
import Icon3 from "../img/law.png";
import Icon4 from "../img/prison (1).png";
import ImageActu1 from "../img/ImageActu1.jpeg";
import ImageActu2 from "../img/ImageActu2.jpg";
import ImageActu3 from "../img/ImageActu3.webp";
import ArrowUp from "../img/arrows.png"; // Exemple de logo flèche vers le haut
import ArrowDown from "../img/down-arrow.png"; // Exemple de logo flèche vers le bas
import "../App.css"; // Assurez-vous d'importer votre fichier CSS
import HeaderEnglish from "../components/HeaderEnglish";

const ExpertiseEnglish = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div>
      <HeaderEnglish />
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
            src={Palais}
            alt="Palais"
            style={{ width: "120%", float: "left", marginLeft: "10%" }}
            onLoad={handleImageLoad}
          />
        </div>

        <div style={{ width: "100%", paddingLeft: "10%" }}>
          <h3
            style={{
              fontFamily: "Montserrat",
              lineHeight: "30px",
              fontWeight: "normal",
              color: "#881106",
              fontSize: "15px",
            }}
          >
            EXPERTISES
          </h3>
          <h1
            style={{
              fontFamily: "Prata",
              fontWeight: "normal",
              color: "#222222",
              marginTop: "20px",
              marginRight: "2%",
              fontSize: "4vw",
            }}
          >
            Direct Contact
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
            Criminal law and criminal procedure have the particularity of
            involving all areas of law: family law, environmental law, tax law,
            labor law... For this reason, Maître Thomas Bocquet's Law Firm is
            competent in multiple areas of criminal law. You thus benefit from
            all the expertise you seek, with follow-up on your cases and direct
            contact with your lawyer without any intermediaries.
          </p>
          <p style={{ margin: "50px 0" }}>
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
              Learn more
            </Link>
          </p>
        </div>
      </div>

      <div
        className="SecondPart"
        style={{
          backgroundColor: "#F4F5F7",
          padding: "40px",
          marginTop: "90px",
        }}
      >
        <h1
          style={{
            fontFamily: "Prata",
            fontSize: "3vw",
            lineHeight: "4vw",
            fontWeight: "normal",
            color: "#222222",
            marginTop: "50px",
          }}
        >
          Areas of expertise
        </h1>
        <hr
          style={{
            width: "90%",
            borderTop: "1px solid black",
            marginTop: "25px",
          }}
        />

        {/* Section 1 */}

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/expertise">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <img
                  src={Icon1}
                  alt="Icon 1"
                  style={{ width: "50%", height: "50%" }}
                />
              </div>
            </Link>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "105%",
                marginLeft: "40px",
                marginTop: "50px",
                marginBottom: "75px",
              }}
            >
              Criminal Procedure and Fundamental Freedoms
              <img
                src={showDetails ? ArrowDown : ArrowUp}
                alt="Toggle"
                style={{
                  cursor: "pointer",
                  width: "60px",
                  height: "60px",
                  marginLeft: "450px",
                }}
                onClick={toggleDetails}
              />
            </p>
          </div>
        </div>
        {/* Texte explicatif avec transition fluide et lente */}
        <div className={showDetails ? "explicatif" : "explicatif hidden"}>
          {/* Contenu du texte explicatif */}
          {showDetails && (
            <div>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: "normal",
                  color: "#4F3D3A",
                  textAlign: "justify",
                  marginRight: "100px",
                  marginLeft: "230px",
                  marginBottom: "80px",
                  transition: "opacity 0.5s ease-in-out", // Transition pour l'opacité
                  opacity: showDetails ? 1 : 0, // Opacité conditionnelle
                }}
              >
                Il est de coutume de dire que la « forme est la sœur jumelle de
                la liberté » Rudof von Jhering – L’esprit du droit romain dans
                les diverses phases de son développement (1877). Pour cette
                raison, indépendamment de l’étude du fond d’un dossier, c’est
                également sur la régularité de la procédure que les avocats du
                cabinet de Maître BOCQUET se penchent, afin de s’assurer que les
                poursuites respectent les libertés fondamentales de tous leurs
                clients. Lorsque le dossier le permet, ils sont ainsi en mesure
                de développer des nouveaux outils permettant de renforcer ces
                libertés, telles que des Questions Prioritaires de
                Constitutionnalité (QPC), des requêtes en nullité (etc…)
              </p>
            </div>
          )}
        </div>

        <hr
          className={showDetails ? "transition-hr" : ""}
          style={{
            width: "90%",
            borderTop: "1px solid black",
            marginTop: showDetails ? "80px" : "25px", // Modifier la marge supérieure en fonction de showDetails
          }}
        />

        {/* Section 2 */}

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/expertise">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <img
                  src={Icon2}
                  alt="Icon 2"
                  style={{ width: "50%", height: "50%" }}
                />
              </div>
            </Link>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "105%",
                marginLeft: "40px",
                marginTop: "50px",
                marginBottom: "75px",
              }}
            >
              Crimes and Offenses against Persons
              <img
                src={showDetails ? ArrowDown : ArrowUp}
                alt="Toggle"
                style={{
                  cursor: "pointer",
                  width: "60px",
                  height: "60px",
                  marginLeft: "450px",
                }}
                onClick={toggleDetails}
              />
            </p>
          </div>
        </div>
        {/* Texte explicatif avec transition fluide et lente */}
        <div className={showDetails ? "explicatif" : "explicatif hidden"}>
          {/* Contenu du texte explicatif */}
          {showDetails && (
            <div>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: "normal",
                  color: "#4F3D3A",
                  textAlign: "justify",
                  marginRight: "100px",
                  marginLeft: "230px",
                  marginBottom: "80px",
                  transition: "opacity 0.5s ease-in-out", // Transition pour l'opacité
                  opacity: showDetails ? 1 : 0, // Opacité conditionnelle
                }}
              >
                Vos avocats sont en mesure de déterminer avec précision si vous
                êtes auteurs ou victimes d’un fait susceptible de revêtir la
                qualification d’infraction pénale et ce notamment en matière
                d’atteintes aux personnes. Son comprises dans cette
                classification générale : Les atteintes à la vie et à
                l’intégrité physique (meurtre, violences, viols, infractions à
                caractère sexuel, harcèlement, trafic de stupéfiants, trafic
                d’arme et mise en danger de la personne, …) Les atteintes à la
                dignité de la personne telles que les discriminations, le
                proxénétisme, … Les atteintes à la personnalité telles que
                l’atteinte à la vie privée, la dénonciation calomnieuse, …
              </p>
            </div>
          )}
        </div>

        <hr
          className={showDetails ? "transition-hr" : ""}
          style={{
            width: "90%",
            borderTop: "1px solid black",
            marginTop: showDetails ? "80px" : "25px", // Modifier la marge supérieure en fonction de showDetails
          }}
        />

        {/* Section 3 */}

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/expertise">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <img
                  src={Icon3}
                  alt="Icon 3"
                  style={{ width: "50%", height: "50%" }}
                />
              </div>
            </Link>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "105%",
                marginLeft: "40px",
                marginTop: "50px",
                marginBottom: "75px",
              }}
            >
              Business Criminal Law and Customs Law
              <img
                src={showDetails ? ArrowDown : ArrowUp}
                alt="Toggle"
                style={{
                  cursor: "pointer",
                  width: "60px",
                  height: "60px",
                  marginLeft: "450px",
                }}
                onClick={toggleDetails}
              />
            </p>
          </div>
        </div>
        {/* Texte explicatif avec transition fluide et lente */}
        <div className={showDetails ? "explicatif" : "explicatif hidden"}>
          {/* Contenu du texte explicatif */}
          {showDetails && (
            <div>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: "normal",
                  color: "#4F3D3A",
                  textAlign: "justify",
                  marginRight: "100px",
                  marginLeft: "230px",
                  marginBottom: "80px",
                  transition: "opacity 0.5s ease-in-out", // Transition pour l'opacité
                  opacity: showDetails ? 1 : 0, // Opacité conditionnelle
                }}
              >
                Le cabinet de Maître BOCQUET intervient également en matière de
                droit pénal des affaires (escroqueries, vols, abus de confiance
                et abus de biens sociaux, fraude fiscale, banqueroute … etc).
                Parce que la gestion d’une entreprise est de plus en plus
                règlementée et les sanctions financières toujours plus élevées,
                il est important de pouvoir s’appuyer sur des conseils avisés en
                la matière, afin de prévenir les risques d’infractions pénales
                ou, dans la plus grave des hypothèses, de défendre les salariés,
                chefs d’entreprise ou les sociétés elles-mêmes contre les
                poursuites. Aussi, s’agissant d’un domaine qui s’immisce de plus
                en plus dans les procédures pénales, les avocats du cabinet vous
                assistent également droit pénal douanier, matière qui expose les
                condamnés à de lourdes sanctions financières. Vos avocats vous
                garantissent des audits très précis afin de prévenir ces risques
                (Travail dissimulés, banqueroute, abus de confiance, abus de
                biens sociaux, fraude fiscale … etc).
              </p>
            </div>
          )}
        </div>

        <hr
          className={showDetails ? "transition-hr" : ""}
          style={{
            width: "90%",
            borderTop: "1px solid black",
            marginTop: showDetails ? "80px" : "25px", // Modifier la marge supérieure en fonction de showDetails
          }}
        />

        {/* Section 4 */}

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/expertise">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "90px",
                  marginTop: "20px",
                }}
              >
                <img
                  src={Icon4}
                  alt="Icon "
                  style={{ width: "50%", height: "50%" }}
                />
              </div>
            </Link>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "105%",
                marginLeft: "40px",
                marginTop: "50px",
                marginBottom: "75px",
              }}
            >
              Business Criminal Law and Customs Law
              <img
                src={showDetails ? ArrowDown : ArrowUp}
                alt="Toggle"
                style={{
                  cursor: "pointer",
                  width: "60px",
                  height: "60px",
                  marginLeft: "450px",
                }}
                onClick={toggleDetails}
              />
            </p>
          </div>
        </div>
        {/* Texte explicatif avec transition fluide et lente */}
        <div className={showDetails ? "explicatif" : "explicatif hidden"}>
          {/* Contenu du texte explicatif */}
          {showDetails && (
            <div>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: "normal",
                  color: "#4F3D3A",
                  textAlign: "justify",
                  marginRight: "100px",
                  marginLeft: "230px",
                  marginBottom: "80px",
                  transition: "opacity 0.5s ease-in-out", // Transition pour l'opacité
                  opacity: showDetails ? 1 : 0, // Opacité conditionnelle
                }}
              >
                Le cabinet de Maître BOCQUET intervient également en matière de
                droit pénal des affaires (escroqueries, vols, abus de confiance
                et abus de biens sociaux, fraude fiscale, banqueroute … etc).
                Parce que la gestion d’une entreprise est de plus en plus
                règlementée et les sanctions financières toujours plus élevées,
                il est important de pouvoir s’appuyer sur des conseils avisés en
                la matière, afin de prévenir les risques d’infractions pénales
                ou, dans la plus grave des hypothèses, de défendre les salariés,
                chefs d’entreprise ou les sociétés elles-mêmes contre les
                poursuites. Aussi, s’agissant d’un domaine qui s’immisce de plus
                en plus dans les procédures pénales, les avocats du cabinet vous
                assistent également droit pénal douanier, matière qui expose les
                condamnés à de lourdes sanctions financières. Vos avocats vous
                garantissent des audits très précis afin de prévenir ces risques
                (Travail dissimulés, banqueroute, abus de confiance, abus de
                biens sociaux, fraude fiscale … etc).
              </p>
            </div>
          )}
        </div>

        <hr
          className={showDetails ? "transition-hr" : ""}
          style={{
            width: "90%",
            borderTop: "1px solid black",
            marginTop: showDetails ? "80px" : "25px", // Modifier la marge supérieure en fonction de showDetails
          }}
        />
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
          IN THE MEDIAS
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
          The latest articles
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
              Opening speech by the keynote speaker
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
              With the SLaw law firm in Liège fundamentals
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
              Competition "J'accuse" Brussels
            </p>
          </div>
        </div>
      </div>
      <div
        className="QuatriemePart"
        style={{
          backgroundColor: "#f4F5F7",
          padding: "20px",
          marginTop: "40px",
          flex: 1,
        }}
      >
        <h1
          id="contact-title"
          style={{
            fontFamily: "Prata",
            fontSize: "50px",
            lineHeight: "55px",
            fontWeight: "normal",
            color: "#222222",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          Contact
          <br /> the law firm
        </h1>

        <hr
          style={{
            width: "95%",
            borderTop: "1px solid black",
            margin: "50px",
          }}
        />
        <p
          style={{
            fontFamily: "Montserrat",
            fontSize: "16px",
            lineHeight: "21px",
            fontWeight: "normal",
            color: "#513F3C",
            marginLeft: "10%",
            marginRight: "12%",
          }}
        >
          We invite you to contact us primarily through the form below, leaving
          us your contact details. A lawyer will then contact you as soon as
          possible depending on the nature of your request. We pay great
          attention to respecting professional secrecy, from your first contact
          with the firm to the closing of the file. All our exchanges will be
          kept completely confidential.
        </p>
        <hr
          style={{
            width: "95%",
            borderTop: "1px solid black",
            margin: "50px",
          }}
        />

        <form
          action="/submit"
          method="post"
          style={{ textAlign: "left", marginLeft: "40%" }}
        >
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <label htmlFor="nom">Last Name</label>
            <input type="text" id="nom" name="nom" required />
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <label htmlFor="prenom">First Name</label>
            <input type="text" id="prenom" name="prenom" required />
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <label htmlFor="telephone">Phone</label>
            <input type="tel" id="telephone" name="telephone" required />
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              maxLength="800"
              style={{ width: "300px" }}
            ></textarea>
            <p style={{ fontSize: "12px", color: "gray" }}>
              Maximum 800 caractères
            </p>
          </div>
          <button type="submit">Envoyer</button>
        </form>

        <hr
          style={{
            width: "95%",
            borderTop: "1px solid black",
            margin: "50px",
          }}
        />
        <div
          style={{
            fontFamily: "Prata",
            fontSize: "14px",
            lineHeight: "25px",
            fontWeight: "normal",
            color: "#222222",
            textAlign: "center",
          }}
        >
          <h2>Maître BOCQUET Thomas</h2>
          <p>
            Rue Jondry 2/A,
            <br />
            4020 Liège, Belgium
            <br />
            Phone : +32 4 32 50 02 02
            <br />
            Email : t.bocquet@avocat.be
            <br />
            Justifit :
            <a href="https://www.justifit.be/avocats/avocat-liege-4020-thomas-bocquet-5244/">
              https://www.justifit.be/avocats/avocat-liege-4020-thomas-bocquet-5244/
            </a>
          </p>
        </div>
      </div>

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

export default ExpertiseEnglish;
