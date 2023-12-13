import React, { useState } from "react";
import styles from "../Navbar.module.css";
import { useTranslation } from "react-i18next";
import esFlag from "../../../icons/Espana.svg";
import enFlag from "../../../icons/english.svg";

const LanguageButton = ({ language, changeLanguage }) => (
  <button className={styles.langButton} onClick={() => changeLanguage(language)}>
    <img src={language === "es" ? esFlag : enFlag} alt={language} />
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
    <div onClick={toggleMenu}>
      {selectedLanguage === "es" ? (
        <LanguageButton language="en" changeLanguage={changeLanguage} />
      ) : (
        <LanguageButton language="es" changeLanguage={changeLanguage} />
      )}
    </div>
  );
};

export default LanguageMenu;
