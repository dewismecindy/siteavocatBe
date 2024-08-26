import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageCabinet from "../img/balanceJustice.png";
import ImageThomas from "../img/Thomas.jpg";
import ImageActu1 from "../img/ImageActu1.jpeg";
import ImageActu2 from "../img/ImageActu2.jpg";
import ImageActu3 from "../img/ImageActu3.webp";
import HeaderNerland from "../components/HeaderNerland";

const CabinetNerland = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
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
            HET KANTOOR
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
            Een kantoor
            <br /> gewijd aan <br /> strafrecht
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
            "Uw advocaten verdedigen en assisteren u vanaf het moment dat er
            verdenkingen zijn van een strafbaar feit gepleegd door of tegen u.
            Persoonlijke bijstand is gegarandeerd in alle stadia van de
            procedure, met name bij vervolging voor de rechtbanken
            (Politierechtbank, Jeugdrechtbank, Correctionele rechtbank, Hof van
            Assisen). Uw advocaten verdedigen u ook indien u slachtoffer bent
            van een strafbaar feit, om een eerlijke en volledige vergoeding van
            uw schade te verkrijgen."
          </p>
          <p style={{ margin: "10px 0" }}>
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
              Meer weten
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
          Advocaat aan de balie van Luik
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
                Als oprichter van het kantoor is Meester Thomas Bocquet advocaat
                aan de balie van Luik. Hij is afgestudeerd met een Master in
                Strafrecht aan de faculteit van Brussel en een Master in
                Criminologische Wetenschappen aan de Universiteit van Rijsel.
                Meester Thomas Bocquet heeft zich altijd gericht op de praktijk
                van het strafrecht.
              </p>
              <p style={{ textAlign: "justify" }}>
                Tijdens zijn loopbaan heeft hij zich aangesloten bij het
                advocatenkantoor S-Law in Luik voordat hij in 2019 lid werd van
                het jonge balie van Luik, om vervolgens in 2022 toe te treden
                tot de Orde van Advocaten van Luik.
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
              <p style={{ textAlign: "justify" }}></p>
              <p style={{ textAlign: "justify" }}></p>
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
          De laatste <br /> artikelen
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
              Toespraak <br /> van de openingspleiter <br />
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
              Met het kantoor <br /> SLaw uit Luik
              <br />
              fundamenteel
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
              Wedstrijd
              <br /> "Ik beschuldig" <br />
              Brussel
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

export default CabinetNerland;
