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
import HeaderArabe from "../components/HeaderArabe";

const ExpertiseArabe = () => {
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
            التخصصات
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
            اتصال مباشر بدون وسيط
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
            لقانون الجنائي والإجراءات الجنائية تتميز بأنها تتعلق بجميع مجالات
            القانون: قانون الأسرة، قانون البيئة، القانون الضريبي، قانون العمل...
            لهذا السبب، يتمتع مكتب المحامي توماس بوكيه بكفاءة في عدة مجالات من
            القانون الجنائي. لذا، تستفيد من كل الخبرة التي تبحث عنها، مع متابعة
            شؤونك واتصال مباشر مع محاميك دون وسيط.
          </p>
          <p style={{ margin: "50px 0" }}>
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
          مجالات الاختصاص
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
            <Link to="/expertiseArabe">
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
              إجراءات القانون الجنائي والحريات
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
                من العادة أن يقال: "الشكل هو شقيق الحرية" - رودولف فون ييرينج -
                روح القانون الروماني في مختلف مراحل تطوره (1877).لهذا السبب،
                وبغض النظر عن دراسة مضمون الملف، ينظر محامو مكتب ماجستير بوكيه
                أيضًا في سلامة الإجراءات، لضمان احترام المتابعات للحريات
                الأساسية لجميع عملائهم. عندما يسمح الملف، يكونون بذلك قادرين على
                تطوير أدوات جديدة تسهم في تعزيز هذه الحريات، مثل الأسئلة
                الدستورية الأساسية (QPC) وطلبات الإبطال (وما إلى ذلك ...).
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
            <Link to="/expertiseArabe">
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
              الجرائم والمخالفات المرتكبة ضد الأشخاص
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
                يستطيع محاموك بدقة تحديد ما إذا كنت مرتكبًا أم ضحية لفعل قد يكون
                مؤهلاً لتصنيف جنائي، وذلك بشكل خاص فيما يتعلق بالاعتداءات على
                الأشخاص. يشمل ذلك في هذا التصنيف العام: الاعتداءات على الحياة
                والسلامة الجسدية (القتل، العنف، الاغتصاب، الجرائم ذات الطابع
                الجنسي، التحرش، تجارة المخدرات، تجارة الأسلحة، وتعريض الشخص
                للخطر، ...). وتشمل الاعتداءات على كرامة الشخص مثل التمييز،
                الدعارة، ... وتشمل الاعتداءات على شخصية الفرد مثل انتهاك
                الخصوصية، الإدلاء بشهادة كاذبة، ...
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
            <Link to="/expertiseArabe">
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
              القانون الجنائي التجاري والقانون الجمركي
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
                يتدخل مكتب السيد بوكيه أيضًا في مجال القانون الجنائي التجاري
                (الاحتيال، السرقات، سوء الاستخدام وسوء استغلال الممتلكات
                الاجتماعية، الاحتيال الضريبي، الإفلاس ... الخ). لأن إدارة الشركة
                تخضع لتنظيم أكثر فأكثر والعقوبات المالية أصبحت أعلى، فمن المهم
                أن يكون بالإمكان الاعتماد على استشارات متخصصة في هذا المجال،
                لتجنب مخاطر الانتهاكات الجنائية. أو، في أسوأ الظروف، للدفاع عن
                الموظفين، رؤساء الشركات أو الشركات نفسها ضد المتابعات. بالإضافة
                إلى ذلك، ونظرًا لأن هذا المجال يتداخل بشكل متزايد مع الإجراءات
                الجنائية، يقدم محامو المكتب المساعدة أيضًا في القانون الجنائي
                الجمركي، وهو مجال يعرض المدانين لعقوبات مالية ثقيلة. يضمن لكم
                محاموكم تدقيقًا دقيقًا جدًا لتجنب هذه المخاطر (العمل غير المعلن،
                الإفلاس، سوء الاستخدام، سوء استغلال الممتلكات الاجتماعية،
                الاحتيال الضريبي ... الخ).
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
            <Link to="/expertiseArabe">
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
              القانون الجنائي التجاري والقانون الجمركي
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
                يتدخل مكتب السيد بوكيه أيضًا في مجال القانون الجنائي التجاري
                (الاحتيال، السرقات، سوء الاستخدام وسوء استغلال الممتلكات
                الاجتماعية، الاحتيال الضريبي، الإفلاس ... الخ). لأن إدارة الشركة
                تخضع لتنظيم أكثر فأكثر والعقوبات المالية أصبحت أعلى، فمن المهم
                أن يكون بالإمكان الاعتماد على استشارات متخصصة في هذا المجال،
                لتجنب مخاطر الانتهاكات الجنائية. أو، في أسوأ الظروف، للدفاع عن
                الموظفين، رؤساء الشركات أو الشركات نفسها ضد المتابعات. بالإضافة
                إلى ذلك، ونظرًا لأن هذا المجال يتداخل بشكل متزايد مع الإجراءات
                الجنائية، يقدم محامو المكتب المساعدة أيضًا في القانون الجنائي
                الجمركي، وهو مجال يعرض المدانين لعقوبات مالية ثقيلة. يضمن لكم
                محاموكم تدقيقًا دقيقًا جدًا لتجنب هذه المخاطر (العمل غير المعلن،
                الإفلاس، سوء الاستخدام، سوء استغلال الممتلكات الاجتماعية،
                الاحتيال الضريبي ... الخ).
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
              كلمة المتحدث في العودة.
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
              بالتعاون مع مكتب SLaw في لييج الأساسيات.
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
              مسابقة "أتهم" في بروكسل
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
          اتصل <br />
          بالمكتب
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
          ندعوك إلى الاتصال بنا أولاً من خلال النموذج أدناه، تاركًا لنا معلومات
          الاتصال الخاصة بك. سيتصل بك محامٍ بعد ذلك في أقرب وقت ممكن اعتمادًا
          على طبيعة طلبك.
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
            <label htmlFor="nom"> اسم</label>
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
            <label htmlFor="prenom">اسم العائلة</label>
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
            <label htmlFor="email">بريد إلكتروني</label>
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
            <p style={{ fontSize: "12px", color: "gray" }}></p>
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
            Rue Jondry 2/A, 4020 Liège, Belgium
            <br />
            Phone : +32 4 32 50 02 02
            <br /> Email : t.bocquet@avocat.be
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

export default ExpertiseArabe;
