import React, { useState } from "react";
import styles from "../Navbar.module.css";
import { useTranslation } from "react-i18next";
import esFlag from "../../../icons/Espana.svg";
import enFlag from "../../../icons/english.svg";
import itaFlag from "../../../icons/italy.svg";

const languages = ['es', 'en', 'ita'];

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

  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  return (
    <div className={styles.langContainer}>
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
        <div
          className={styles.allLang}
          onMouseLeave={() => setIsOpen(false)}
        >
          <LanguageButton
            language={selectedLanguage}
            changeLanguage={changeLanguage}
            selectedLanguage={selectedLanguage}
          />
          {
            languages.filter((lang) => lang !== selectedLanguage).map((lang) => (
              <LanguageButton
                language={lang}
                changeLanguage={changeLanguage}
                selectedLanguage={selectedLanguage}
              />
            ))
          }
        </div>
      )}
    </div>
  );
};

export default LanguageMenu;
