import React from "react";

const DeuxCabinets = () => {
  return (
    <section id="deux-cabinets">
      <div
        className="deux-cabinets-container"
        style={{
          backgroundColor: "#f4F5F7",
          padding: "20px",
          marginTop: "40px",
          flex: 1,
        }}
      >
        {/* Partie Contact */}
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
            style={{
              fontWeight: "normal",
              color: "#222222",
              marginTop: "5%",
              textAlign: "center",
              fontFamily: "Prata",
              fontSize: "3vw",
              lineHeight: "3vw",
            }}
          >
            Contactez <br /> le cabinet
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
              marginTop: "50px",
            }}
          >
            Nous vous invitons à nous contacter en priorité par le biais du
            formulaire ci-dessous, en nous laissant vos coordonnées. Un avocat
            prendra ensuite contact avec vous dans les meilleurs délais en
            fonction de la nature de votre demande. Nous accordons une grande
            attention au respect du secret professionnel, de votre premier
            contact avec le cabinet à la clôture du dossier. L’ensemble de nos
            échanges seront maintenus totalement confidentiels.
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
              <label htmlFor="nom">Nom</label>
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
              <label htmlFor="prenom">Prénom</label>
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
              <label htmlFor="telephone">Téléphone</label>
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
        </div>

        {/* Partie Deux Cabinets */}
        <h1
          id="deux-cabinets-title"
          style={{
            fontFamily: "Prata",
            fontSize: "25px",
            lineHeight: "55px",
            fontWeight: "normal",
            color: "#222222",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          DEUX CABINETS
        </h1>

        <hr
          style={{
            width: "95%",
            borderTop: "1px solid black",
            margin: "50px auto",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 10%",
          }}
        >
          <div
            style={{
              fontFamily: "Prata",
              fontSize: "14px",
              lineHeight: "25px",
              fontWeight: "normal",
              color: "#222222",
              textAlign: "center",
              flex: 1,
            }}
          >
            <h2>Maître BOCQUET Thomas</h2>
            <p>
              80 Rue du Mont-à-Leux,
              <br />
              7700 Mouscron, Belgium
              <br />
              Téléphone : + 32 4 32 50 02 02
              <br />
              Email : t.bocquet@avocat.be
              <br />
              Justifit :<br />
              <a
                href="https://www.justifit.be/avocats/avocat-mouscron-maitre-thomas-bocquet-2-9338/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.justifit.be/avocats/avocat-mouscron
              </a>
            </p>
          </div>

          <div
            style={{
              fontFamily: "Prata",
              fontSize: "14px",
              lineHeight: "25px",
              fontWeight: "normal",
              color: "#222222",
              textAlign: "center",
              flex: 1,
            }}
          >
            <h2>Maître BOCQUET Thomas</h2>
            <p>
              Rue Jondry 2/A,
              <br />
              4020 Liège, Belgium
              <br />
              Téléphone : + 32 4 32 50 02 02
              <br />
              Email : t.bocquet@avocat.be
              <br />
              Justifit :<br />
              <a
                href="https://www.justifit.be/avocats/avocat-liege-4020-thomas-bocquet-5244/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.justifit.be/avocats/avocat-liege
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeuxCabinets;
