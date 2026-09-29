import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./homeProducts.module.css";

const HomeProducts = () => {
  const { t } = useTranslation();

  const products = [
    {
      name: "Kira",
      letter: "K",
      iconClass: styles.cKira,
      image: "/images/kira.png",
      desc: t(
        "homeProducts.kiraDesc",
        "Toma notas, traduce en tiempo real y arma la minuta de tus reuniones."
      ),
      linkText: t("homeProducts.kiraBtn", "Visitar Kira"),
      url: "https://www.kira.holocruxe.com",
    },
    {
      name: "Cruxie WhatsApp",
      letter: "W",
      iconClass: styles.cWa,
      image: "/images/Cruxie-Wpp.png",
      desc: t(
        "homeProducts.waDesc",
        "Un agente de IA que atiende a tus clientes por WhatsApp."
      ),
      linkText: t("homeProducts.waBtn", "Conocer Cruxie WhatsApp"),
      url: "https://www.cruxie.holocruxe.com",
    },
    {
      name: "Vinado",
      letter: "V",
      iconClass: styles.cVinado,
      image: "/images/vinado.png",
      desc: t(
        "homeProducts.vinadoDesc",
        "Registrá y puntuá los vinos que tomás, sumá puntos y conseguí descuentos."
      ),
      linkText: t("homeProducts.vinadoBtn", "Visitar Vinado"),
      url: "https://www.vinado-app.com",
    },
    {
      name: "Cruxie",
      letter: "C",
      iconClass: styles.cCruxie,
      image: "/images/Cruxie.png",
      desc: t(
        "homeProducts.cruxieDesc",
        "Asistentes de IA entrenados con el conocimiento de tu organización."
      ),
      linkText: t("homeProducts.cruxieBtn", "Visitar Cruxie"),
      url: "https://www.cruxie.holocruxe.com",
    },
  ];

  return (
    <section className={styles.productsSection} aria-label="Nuestros productos">
      <div className={styles.wrap}>
        <h2 className={styles.title}>
          {t("homeProducts.title", "Nuestros productos.")}
        </h2>
        <p className={styles.intro}>
          {t(
            "homeProducts.intro",
            "Los construimos, los operamos y los usamos para probar lo que después hacemos para clientes."
          )}
        </p>

        <div className={styles.prodGrid}>
          {products.map((prod, index) => (
            <article key={index} className={styles.prodCard}>
              <div className={styles.plogo}>
                {prod.image ? (
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className={styles.productAvatar}
                  />
                ) : (
                  <i className={`${styles.icon} ${prod.iconClass}`} aria-hidden="true">
                    {prod.letter}
                  </i>
                )}
                <span>{prod.name}</span>
              </div>
              <p className={styles.prodDesc}>{prod.desc}</p>
              <a
                href={prod.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.prodLink}
              >
                {prod.linkText} →
              </a>
            </article>
          ))}
        </div>

        <div className={styles.actions}>
          <NavLink to="/products" className={styles.btnGhost}>
            {t("homeProducts.allBtn", "Ver todos los productos")}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
