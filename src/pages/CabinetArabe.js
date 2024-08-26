import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageCabinet from "../img/balanceJustice.png";
import ImageThomas from "../img/Thomas.jpg";
import ImageActu1 from "../img/ImageActu1.jpeg";
import ImageActu2 from "../img/ImageActu2.jpg";
import ImageActu3 from "../img/ImageActu3.webp";
import HeaderArabe from "../components/HeaderArabe";

const CabinetArabe = () => {
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
            مكتب متخصص في القانون الجنائي
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
            مكتب قانوني مختص بالقانون الجنائي
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
            محاموكم يدافعون عنكم ويقدمون لكم المساعدة منذ لحظة الاشتباه في
            ارتكاب جريمة من قبلكم أو ضدكم. يتم ضمان المساعدة الشخصية في جميع
            مراحل الإجراءات، خاصة خلال الإجراءات أمام المحاكم (محكمة الشرطة،
            محكمة الأحداث، محكمة الجنايات، المحكمة الجنائية). كما يدافع محاموكم
            عنكم إذا كنتم ضحايا لجريمة، بهدف الحصول على تعويض عادل وكامل
            لأضراركم.
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
              تعرف أكثر
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
          ماست Thomas Bocquet <br />
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
          محامٍ في نقابة محامين لييج
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
                مؤسس المكتب، المحامي توماس بوكيه هو محامٍ في نقابة محامين ليون.
                حاصل على درجة الماجستير في القانون الجنائي من جامعة إيكس أون
                بروفانس ودرجة الماجستير في العلوم الجنائية من جامعة باريس
                العاشرة، وكان مايتر توماس بوكيه دائمًا متخصصًا في ممارسة القانون
                الجنائي.
              </p>
              <p style={{ textAlign: "justify" }}></p>
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
          في وسائل الإعلام.
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
          أحدث المقالات
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
              مُتحدث الخطاب الافتتاحي
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
              مع مكتب المحاماة SLaw في أسس لييج.
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
              مسابقة "أتهم" بروكسل.
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
          اتصل بمكتب المحاماة
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
          ندعوكم للتواصل معنا في المقام الأول من خلال النموذج أدناه، متركين لنا
          تفاصيل الاتصال الخاصة بكم. سيقوم أحد المحامين بالاتصال بكم في أقرب وقت
          ممكن حسب طبيعة طلبكم. نولي اهتمامًا كبيرًا لاحترام السرية المهنية، من
          أول اتصال لكم مع المكتب حتى إغلاق الملف. ستظل جميع تبادلاتنا سرية
          تمامًا.
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
            <label htmlFor="nom">الاسم الأخير</label>
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
            <label htmlFor="prenom">الاسم الأول </label>
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

export default CabinetArabe;
