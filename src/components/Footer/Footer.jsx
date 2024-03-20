import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import logo from "../../assets/images/logo.svg";
import insta from "../../assets/images/insta.svg";
import phone from "../../assets/images/phone.svg";
import fa from "../../assets/images/fa.svg";
import location from "../../assets/images/location.svg";
import "./footer.scss";

const Footer = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_container">
          <div className="logo_wrapper">
            <img src={logo} />
            <h3>
              {selectedLanguage === "en" ? `Where is the Pizza?` : `Куда пицца`}
            </h3>
          </div>
          <ul>
            <li>
              {selectedLanguage === "en" ? `Where is the Pizza?` : `Куда пицца`}
            </li>
            <li>
              {selectedLanguage === "en" ? `About the company` : `О компании`}
            </li>
            <li>
              {selectedLanguage === "en"
                ? `User agreement`
                : `Пользовательское соглашение`}
            </li>
            <li>
              {selectedLanguage === "en"
                ? `Warranty conditions`
                : `Условия гарантии`}
            </li>
          </ul>
          <ul>
            <li>{selectedLanguage === "en" ? `Help` : `Помощь`}</li>
            <li>{selectedLanguage === "en" ? `Restaurant` : `Ресторан`}</li>
            <li>{selectedLanguage === "en" ? `Contacts` : `Контакты`}</li>
            <li>{selectedLanguage === "en" ? `Support` : `Поддержка`}</li>
            <li>
              {selectedLanguage === "en"
                ? `Track the order`
                : `Отследить заказ`}
            </li>
          </ul>

          <ul className="contact_us">
            <li>{selectedLanguage === "en" ? `Contact Us` : `Контакты`}</li>
            <li>
              <img src={phone} />
              +998 (99) 123-45-67
            </li>
            <li>
              <img src={location} />
              {selectedLanguage === "en"
                ? `Moscow, ul. Yunykh Lenintsev, 99`
                : `Москва, ул. Юных Ленинцев, д.99`}
            </li>
            <li className="last">
              <img src={fa} />
              Facebook
              <img src={insta} />
              Instagram
            </li>
          </ul>
        </div>
        <small>© Copyright 2021 — Куда Пицца</small>
      </div>
    </footer>
  );
};

export default Footer;
