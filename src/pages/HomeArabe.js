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
import HeaderEnglish from "../components/HeaderEnglish";

const HomeArabe = () => {
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
            A modifier en arabe
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
            Law Office of
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
            The firm is able to accurately determine whether you are
            perpetrators or victims of an act that may constitute a criminal
            offense, for all types of offenses.
          </p>
          <p style={{ margin: "10px 0" }}>
            <Link
              to="/cabinetEnglish"
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
              The Law Firm
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
          CRIMINAL LAW
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
          Multidisciplinary expertise <br />
          in criminal matters
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
            <Link to="/ExpertiseEnglish">
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
              Criminal procedure <br /> and fundamental <br />
              freedoms
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
            <Link to="/ExpertiseEnglish">
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
              Crimes & misdemeanors
              <br /> committed against <br />
              individuals
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
            <Link to="/ExpertiseEnglish">
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
              Criminal law
              <br /> of business and <br />
              customs law
            </p>
          </div>
          <div
            style={{
              margin: "2px",
            }}
          >
            <Link to="/ExpertiseEnglish">
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
              Prison law,
              <br /> execution,
              <br /> and application <br />
              of sentences <br />
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
          IN THE MEDIA
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
              Opening speech <br /> of the Bar Association of Liège <br />
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
              With the SLaw law <br /> firm in Liège
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
        </div>
      </div>

      <section id="contact">
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
            We invite you to contact us primarily through the form below,
            leaving us your contact details. A lawyer will then contact you as
            soon as possible depending on the nature of your request. We pay
            great attention to respecting professional secrecy, from your first
            contact with the firm to the closing of the file. All our exchanges
            will be kept completely confidential.
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
      </section>
    </div>
  );
};

export default HomeArabe;
