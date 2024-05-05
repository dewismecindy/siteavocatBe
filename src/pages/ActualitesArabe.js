import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageCabinet from "../img/balanceJustice.png";
import ImageThomas from "../img/Thomas.jpg";
import ImageActu1 from "../img/ImageActu1.jpeg";
import ImageActu2 from "../img/ImageActu2.jpg";
import ImageActu3 from "../img/ImageActu3.webp";
import HeaderArabe from "../components/HeaderArabe";

const ActualitesArabe = () => {
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
            المكتب
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
            مكتب مخصص <br />
            للقانون الجنائي
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
            يدافع محاموك ويقدمون لك المساعدة منذ الشكوك في ارتكاب جريمة بواسطةك
            أو عليك. يضمن لكم التوجيه الشخصي في جميع مراحل الإجراءات وخاصة
            الملاحقات أمام المحاكم (محكمة الشرطة، محكمة الأطفال، المحكمة
            الجنائية، محكمة الجنايات). يدافع محاموك أيضًا إذا كنت ضحية جريمة، من
            أجل الحصول على تعويض عادل وكامل عن الأذى الذي لحق بك.
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
              اعرف أكثر
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
          ميتوماس بوكيه <br />
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
          محامي في نقابة لييج
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
                مؤسس المكتب، ميتوماس بوكيه هو محام في نقابة لييج. حاصل على إجازة
                في القانون الجنائي من كلية بروكسيل ودرجة الماجستير في العلوم
                الجنائية من جامعة ليل، توجه ميتوماس بوكيه دائمًا إلى ممارسة
                القانون الجنائي.
              </p>
              <p style={{ textAlign: "justify" }}>
                خلال مسيرته، انضم إلى مكتب سلاو في لييج قبل الانضمام، في عام
                2018، إلى نقابة لييج الشابة وفي عام 2021 إلى مجلس نقابة نقابة
                لييج.
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
                كان ماكسنس باسكال، الذي عمل سابقًا كمدرس في جامعة ليون الثانية
                وشارك في ترأس لجنة القانون الجنائي في مدرسة المحامين، لديه أيضًا
                تدريب متنوع في إدارة الخدمات السجنية الإقليمية في ليون (DISP)
                والسجن في ليون-كورباز والمحكمة الجنائية الإقليمية المتخصصة
                (JIRS) في محكمة الجنايات في ليون.
              </p>
              <p style={{ textAlign: "justify" }}>
                جلبته هذه التجارب الأخيرة ليكون مفتوحًا على الحكم ثم على مسار
                تنفيذ العقوبات للمدانين.
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
          في وسائل الإعلام
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
          آخر المقالات
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
              كلمة <br /> المتحدث في افتتاح العام الدراسي <br />
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
              مع مكتب <br /> سلاو في لييج
              <br />
              الأساسية
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
              مسابقة
              <br /> "أتهم" <br />
              بروكسل
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
            marginTop: "50px",
          }}
        >
          ندعوكم للاتصال بنا بالأساس عن طريق النموذج أدناه، وترك تفاصيلكم لنا.
          سيتصل بكم محام في أقرب وقت ممكن تبعًا لطبيعة طلبكم. نولي اهتمامًا
          كبيرًا لاحترام السرية المهنية، من اتصالكم الأول بالمكتب إلى إغلاق
          الملف. سيتم الحفاظ على جميع تبادلاتنا بسرية تامة.
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
            <label htmlFor="prenom">الاسم الأول</label>
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
            <label htmlFor="telephone">هاتف</label>
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
            <label htmlFor="message">رسالة</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              maxLength="800"
              style={{ width: "300px" }}
            ></textarea>
            <p style={{ fontSize: "12px", color: "gray" }}>أقصى 800 حرف</p>
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
            marginTop: "50px",
          }}
        >
          <p>
            إذا كنتم تفضلون الاتصال بالمكتب مباشرة، يمكنكم الاتصال بنا عبر
            البريد الإلكتروني أو الهاتف.
          </p>
          <p>
            <strong>البريد الإلكتروني:</strong> info@bocquet-thomas.be
          </p>
          <p>
            <strong>الهاتف:</strong> +32 470 61 71 55
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActualitesArabe;
