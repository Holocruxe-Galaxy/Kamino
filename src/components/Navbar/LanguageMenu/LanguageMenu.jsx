import React, { useState } from "react";
import styles from "../Navbar.module.css";
import { useTranslation } from "react-i18next";
import esFlag from "../../../icons/Espana.svg";
import enFlag from "../../../icons/english.svg";
import itaFlag from "../../../icons/italy.svg";

const LanguageButton = ({ language, changeLanguage }) => (
  <button
    className={styles.langButton}
    onClick={() => changeLanguage(language)}
  >
    <img
      src={language === "es" ? esFlag : language === "en" ? enFlag : itaFlag}
      alt={language}
    />
  </button>
);

const LanguageMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  return (
    <div>
      <button className={styles.langButton} onClick={toggleMenu}>
        <img
          src={
            selectedLanguage === "es"
              ? esFlag
              : selectedLanguage === "en"
              ? enFlag
              : itaFlag
          }
          alt={selectedLanguage}
        />
      </button>
      {isOpen && (
        <div className={styles.allLang}>
          <LanguageButton language="es" changeLanguage={changeLanguage} />
          <LanguageButton language="en" changeLanguage={changeLanguage} />
          <LanguageButton language="ita" changeLanguage={changeLanguage} />
        </div>
      )}
    </div>
  );
};

export default LanguageMenu;
