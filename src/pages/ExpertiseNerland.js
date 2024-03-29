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
import HeaderNerland from "../components/HeaderNerland";

const ExpertiseNerland = () => {
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
      <HeaderNerland />
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
            EXPERTISEN
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
            Direct contact zonder tussenkomst
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
            Het strafrecht en strafprocedures hebben als bijzonderheid dat ze
            betrekking hebben op alle rechtsgebieden: familierecht, milieurecht,
            belastingrecht, arbeidsrecht ... Om deze reden is het
            advocatenkantoor van Meester Thomas Bocquet bekwaam in meerdere
            rechtsgebieden van het strafrecht. U profiteert zo van alle
            expertise die u zoekt, met opvolging van uw zaken en rechtstreeks
            contact met uw advocaat zonder enige tussenkomst.
          </p>
          <p style={{ margin: "50px 0" }}>
            <Link
              to="/CabinetNerland"
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
          De vakgebieden <br /> van expertise
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
            <Link to="/expertiseNerland">
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
              Strafprocedure en fundamentele vrijheden
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
                Het is gebruikelijk om te zeggen dat "vorm de tweelingzus van
                vrijheid is" - Rudolf von Jhering - De geest van het Romeinse
                recht in de verschillende fasen van zijn ontwikkeling (1877). Om
                deze reden onderzoeken de advocaten van het kantoor van Meester
                BOCQUET, los van de inhoud van een zaak, ook de regelmatigheid
                van de procedure, om ervoor te zorgen dat de vervolgingen de
                fundamentele rechten van al hun cliënten respecteren. Wanneer de
                zaak dit toelaat, zijn ze in staat nieuwe instrumenten te
                ontwikkelen om deze rechten te versterken, zoals Prioritaire
                Grondwettelijkheidsvragen (QPC), verzoeken tot nietigverklaring,
                enz.
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
            <Link to="/expertiseNerland">
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
              Misdrijven en overtredingen gepleegd tegen personen
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
                Uw advocaten zijn in staat nauwkeurig vast te stellen of u dader
                of slachtoffer bent van een feit dat mogelijk als een strafbaar
                feit kan worden gekwalificeerd, met name op het gebied van
                misdrijven tegen personen. Dit omvat onder meer: Aanvallen op
                het leven en de lichamelijke integriteit (moord, geweld,
                verkrachting, seksuele misdrijven, intimidatie, drugshandel,
                wapenhandel en het in gevaar brengen van personen, ...)
                Aanvallen op de waardigheid van de persoon, zoals discriminatie,
                mensenhandel, ... Aanvallen op de persoonlijkheid, zoals
                schending van de privacy, lasterlijke aanklachten, ...
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
            <Link to="/expertiseNerland">
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
              Strafrecht voor zaken en douanerecht
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
                Het kantoor van Meester BOCQUET is ook actief op het gebied van
                het strafrecht voor zaken (oplichting, diefstal, misbruik van
                vertrouwen en misbruik van bedrijfsmiddelen, belastingfraude,
                faillissement, enz.). Omdat het beheer van een bedrijf steeds
                meer gereguleerd is en de financiële sancties steeds hoger
                worden, is het belangrijk om te kunnen vertrouwen op deskundig
                advies op dit gebied, om het risico op strafbare feiten te
                voorkomen of, in het ergste geval, werknemers, ondernemers of de
                bedrijven zelf te verdedigen tegen vervolging. Bovendien, gezien
                het feit dat dit gebied steeds meer verweven raakt met
                strafrechtelijke procedures, staan de advocaten van het kantoor
                u ook bij op het gebied van douanestrafrecht, een gebied dat
                veroordeelden blootstelt aan zware financiële sancties. Uw
                advocaten garanderen u zeer nauwkeurige audits om deze risico's
                te voorkomen (verborgen werk, faillissement, misbruik van
                vertrouwen, misbruik van bedrijfsmiddelen, belastingfraude,
                enz.).
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
            <Link to="/expertiseNerland">
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
              Strafrecht voor zaken en douanerecht
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
                Het kantoor van Meester BOCQUET is ook gespecialiseerd in het
                strafrecht voor zaken (oplichting, diefstal, misbruik van
                vertrouwen en misbruik van bedrijfsmiddelen, belastingfraude,
                faillissement, enz.). Omdat het beheer van een bedrijf steeds
                meer gereguleerd is en de financiële sancties steeds hoger
                worden, is het belangrijk om deskundig advies in te winnen om de
                risico's op strafbare feiten te voorkomen of, in ernstige
                gevallen, werknemers, ondernemers of bedrijven te verdedigen
                tegen vervolging. Daarnaast helpen de advocaten van het kantoor
                ook op het gebied van douanestrafrecht, een gebied dat
                veroordeelden blootstelt aan zware financiële sancties en steeds
                meer betrokken raakt bij strafrechtelijke procedures. Uw
                advocaten garanderen zeer nauwkeurige audits om deze risico's te
                voorkomen (verborgen werk, faillissement, misbruik van
                vertrouwen, misbruik van bedrijfsmiddelen, belastingfraude,
                enz.).
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
          IN DE MEDIA
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
          De laatste artikelen
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
              Toespraak Inleidende <br /> spreker
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
              Met het kantoor SLaw <br /> in Luik fundamenten
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
              Wedstrijd <br /> "Ik beschuldig" <br /> Brussel
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
          ></div>
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
          Neem contact op <br /> met het kantoor
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
          We nodigen u uit om ons bij voorkeur te contacteren via het
          onderstaande formulier door uw contactgegevens achter te laten. Een
          advocaat zal vervolgens zo snel mogelijk contact met u opnemen,
          afhankelijk van de aard van uw verzoek. We hechten veel belang aan het
          respecteren van het beroepsgeheim, van uw eerste contact met het
          kantoor tot de afsluiting van het dossier. Al onze communicatie zal
          strikt vertrouwelijk blijven.
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
            <label htmlFor="nom">Naam</label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              autocomplete="name"
            />
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <label htmlFor="prenom">Voornaam</label>
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
            <label htmlFor="telephone"> Telefoon</label>
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
            <label htmlFor="email">E-mail</label>
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
            <label htmlFor="message">Bericht</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              maxLength="800"
              style={{ width: "300px" }}
            ></textarea>
            <p style={{ fontSize: "12px", color: "gray" }}>
              Maximaal 800 tekens
            </p>
          </div>
          <button type="submit">Verzenden</button>
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
          <h2>Meester BOCQUET Thomas</h2>
          <p>
            Rue Jondry 2/A,
            <br />
            4020 Liège, Belgium
            <br />
            Téléphone : + 32 4 32 50 02 02
            <br />
            Email : t.bocquet@avocat.be
            <br />
            Justifit :
            https://www.justifit.be/avocats/avocat-liege-4020-thomas-bocquet-5244/
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

export default ExpertiseNerland;
