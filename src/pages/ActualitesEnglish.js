import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageCabinet from "../img/balanceJustice.png";
import ImageThomas from "../img/Thomas.jpg";
import ImageActu1 from "../img/ImageActu1.jpeg";
import ImageActu2 from "../img/ImageActu2.jpg";
import ImageActu3 from "../img/ImageActu3.webp";
import HeaderEnglish from "../components/HeaderEnglish";

const ActualitesEnglish = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
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
            THE FIRM
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
            A Law Firm <br />
            dedicated
            <br /> to criminal law
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
            Your lawyers defend and assist you from the moment suspicions of an
            offense committed by or against you arise. Personalized assistance
            is guaranteed at all stages of the procedure, particularly during
            proceedings before the courts (Police Court, Juvenile Court,
            Criminal Court, Assize Court). Your lawyers also defend you if you
            are a victim of an offense, aiming to obtain fair and complete
            compensation for your damages.
          </p>
          <p style={{ margin: "10px 0" }}>
            <Link
              to="/CabinetEnglish"
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
          Lawyer at the Bar Association of Liège
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
                Founder of the firm, Maître Thomas Bocquet is a lawyer at the
                Lyon Bar Association. Holding a Master's degree in Criminal Law
                from the University of Aix-en-Provence and a Master's degree in
                Criminal Sciences from the University of Paris X, Maître Thomas
                Bocquet has always been focused on the practice of Criminal Law.
              </p>
              <p style={{ textAlign: "justify" }}>
                Throughout his career, he joined the Gueguen-Carrol Law Firm in
                Paris before joining a Lyon-based law firm specializing in
                criminal procedure in 2012.
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
                A former lecturer at the University of Lyon II and co-chair of
                the Criminal Commission of the School of Lawyers, Maître Thomas
                Bocquet also has diverse training experience within the
                Interregional Directorate of Penitentiary Services in Lyon
                (DISP), the Lyon-Corbas Detention Center, and the Interregional
                Specialized Jurisdiction (JIRS) of the Lyon Criminal Court.
              </p>
              <p style={{ textAlign: "justify" }}>
                These experiences have led him to gain insights into both
                sentencing and the execution of sentences for convicts.
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
          IN MEDIAS
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
          The latest <br /> articles
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
              Opening <br /> speech speaker <br />
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
              With the SLaw <br /> law firm in
              <br />
              Liège fundamentals.
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
              Competition
              <br /> "J'accuse" <br />
              Brussels
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

export default ActualitesEnglish;
