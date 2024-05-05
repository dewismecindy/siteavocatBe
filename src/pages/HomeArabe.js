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
import HeaderArabe from "../components/HeaderArabe";

const HomeArabe = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div>
      <HeaderArabe />
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
            النقابة في تورناي
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
            مكتب المحامين
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
            المكتب قادر على تحديد بدقة ما إذا كنت مرتكبًا أم ضحية لفعل قد يشكل
            جريمة جنائية، لجميع أنواع الجرائم
          </p>
          <p style={{ margin: "10px 0" }}>
            <Link
              to="/CabinetArabe"
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
              المكتب
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
          القانون الجنائي
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
          متعدد الاختصاصات في القانون الجنائي
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
            <Link to="/ExpertiseArabe">
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
              إجراءات القانون الجنائي والحريات الأساسية
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
            <Link to="/ExpertiseArabe">
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
              جرائم ومخالفات مرتكبة ضد الأشخاص
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
            <Link to="/ExpertiseArabe">
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
              القانون الجنائي للشؤون التجارية والجمارك
            </p>
          </div>
          <div
            style={{
              margin: "2px",
            }}
          >
            <Link to="/ExpertiseArabe">
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
              القانون السجني، وتنفيذ وتطبيق العقوبات
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
          في وسائل الإعلام
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
          آخر المقالات
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
              خطاب المتحدث في الافتتاحية مع مكتب SLaw في لييج
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
              مسابقة "اتهم" في بروكسل
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
              تواصل مع المكتب سيتم الحفاظ على البيانات سرية تمامًا.
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
            اتصل بالمكتب
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
            ندعوكم للتواصل معنا في المقام الأول من خلال النموذج أدناه، وترك
            تفاصيل الاتصال الخاصة بكم.سيقوم محامٍ بالاتصال بكم في أقرب وقت ممكن
            وفقًا لطبيعة استفساركم.نولي اهتمامًا كبيرًا لاحترام السرية المهنية،
            من أول اتصال لكم بالمكتب إلى إغلاق الملف. سيتم الحفاظ على سرية جميع
            تبادلاتنا بشكل تام.
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
              <label htmlFor="nom">الاسم</label>
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
              <label htmlFor="prenom">اللقب</label>
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
              <label htmlFor="telephone">الهاتف</label>
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
              <label htmlFor="email">البريد الإلكتروني</label>
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
              <label htmlFor="message">الرسالة</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                maxLength="800"
                style={{ width: "300px" }}
              ></textarea>
              <p style={{ fontSize: "12px", color: "gray" }}>
                الحد الأقصى 800 حرف
              </p>
            </div>
            <button type="submit">إرسال</button>
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
            <h2>المحامي توماس بوكيه</h2>
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
      </section>
    </div>
  );
};

export default HomeArabe;
