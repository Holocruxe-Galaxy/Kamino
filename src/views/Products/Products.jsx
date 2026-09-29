import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Products.module.css";

const Products = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleContactClick = (interest) => (e) => {
    e.preventDefault();
    window.location.href = `/#contacto?interes=${encodeURIComponent(interest)}`;
  };

  const productsList = [
    {
      id: "kira",
      letter: "K",
      iconClass: styles.cKira,
      name: t("productsPage.kira.name", "Kira"),
      title: t(
        "productsPage.kira.h2",
        "Salí de cada reunión con la minuta y los accionables listos."
      ),
      lead: t(
        "productsPage.kira.lead",
        "Toma notas, traduce en tiempo real y arma la minuta de tus reuniones."
      ),
      features: t("productsPage.kira.features", {
        returnObjects: true,
        defaultValue: [
          "Toma notas de la reunión por vos",
          "Traduce en tiempo real",
          "Arma la minuta con los accionables de cada persona",
        ],
      }),
      forDesc: t(
        "productsPage.kira.forDesc",
        "Equipos con muchas reuniones, también en otros idiomas"
      ),
      visitUrl: "https://www.kira.holocruxe.com",
      visitText: t("productsPage.kira.visitBtn", "Visitar Kira"),
      ghostText: t("productsPage.kira.demoBtn", "Pedir demo"),
      isEven: false,
    },
    {
      id: "cruxie_wa",
      letter: "W",
      iconClass: styles.cWa,
      name: t("productsPage.cruxieWa.name", "Cruxie WhatsApp"),
      title: t(
        "productsPage.cruxieWa.h2",
        "Tus clientes preguntan por WhatsApp. Cruxie responde, a cualquier hora."
      ),
      lead: t(
        "productsPage.cruxieWa.lead",
        "Un agente de IA que atiende a tus clientes por WhatsApp."
      ),
      features: t("productsPage.cruxieWa.features", {
        returnObjects: true,
        defaultValue: [
          "Responde consultas de clientes en WhatsApp",
          "Funciona sobre la API oficial de WhatsApp Business",
          "Se entrena con la información de tu negocio",
        ],
      }),
      forDesc: t(
        "productsPage.cruxieWa.forDesc",
        "Negocios con muchas consultas repetidas"
      ),
      visitUrl: "https://www.cruxie.holocruxe.com",
      visitText: t("productsPage.cruxieWa.visitBtn", "Conocer Cruxie WhatsApp"),
      ghostText: t("productsPage.cruxieWa.demoBtn", "Pedir demo"),
      isEven: true,
    },
    {
      id: "vinado",
      letter: "V",
      iconClass: styles.cVinado,
      name: t("productsPage.vinado.name", "Vinado"),
      title: t(
        "productsPage.vinado.h2",
        "Tu historia con el vino, en una app."
      ),
      lead: t(
        "productsPage.vinado.lead",
        "Registrá y puntuá los vinos que tomás, sumá puntos y conseguí descuentos."
      ),
      features: t("productsPage.vinado.features", {
        returnObjects: true,
        defaultValue: [
          "Registrá y puntuá cada vino que probás",
          "Sumá puntos a medida que puntuás",
          "Canjealos por descuentos en los Vinado Points",
          "Para bodegas y vinotecas: sumate como Vinado Point",
        ],
      }),
      forDesc: t(
        "productsPage.vinado.forDesc",
        "Quienes disfrutan el vino, y bodegas o vinotecas que quieren llegar a ellos"
      ),
      visitUrl: "https://www.vinado-app.com",
      visitText: t("productsPage.vinado.visitBtn", "Visitar Vinado"),
      ghostText: t("productsPage.vinado.partnerBtn", "Soy bodega o vinoteca"),
      isEven: false,
    },
    {
      id: "cruxie",
      letter: "C",
      iconClass: styles.cCruxie,
      name: t("productsPage.cruxie.name", "Cruxie"),
      title: t(
        "productsPage.cruxie.h2",
        "El conocimiento de tu empresa, disponible para todo tu equipo."
      ),
      lead: t(
        "productsPage.cruxie.lead",
        "Asistentes de IA entrenados con el conocimiento de tu organización."
      ),
      features: t("productsPage.cruxie.features", {
        returnObjects: true,
        defaultValue: [
          "Creá asistentes y entrenalos con la información de tu organización",
          "Definí quién accede a cada asistente",
          "Conectalo con las herramientas que ya usan",
        ],
      }),
      forDesc: t(
        "productsPage.cruxie.forDesc",
        "Empresas con conocimiento repartido entre personas y documentos"
      ),
      visitUrl: "https://www.cruxie.holocruxe.com",
      visitText: t("productsPage.cruxie.visitBtn", "Visitar Cruxie"),
      ghostText: t("productsPage.cruxie.demoBtn", "Pedir demo"),
      isEven: true,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.wrap}>
          <h1>
            {t("productsPage.titlePart1", "Productos propios,")}
            <br />
            {t("productsPage.titlePart2", "en producción.")}
          </h1>
          <p className={styles.intro}>
            {t(
              "productsPage.intro",
              "Cuatro productos que diseñamos, construimos y operamos. Cada uno tiene su sitio, acá te contamos qué hace."
            )}
          </p>
        </div>
      </section>

      {/* Lista detallada de productos */}
      <div className={styles.wrap}>
        <div className={styles.productsList}>
          {productsList.map((prod) => (
            <article
              key={prod.id}
              id={prod.id}
              className={`${styles.pdetail} ${
                prod.isEven ? styles.reverseShot : ""
              }`}
            >
              <div>
                <div className={styles.plogo}>
                  <i className={`${styles.icon} ${prod.iconClass}`}>
                    {prod.letter}
                  </i>
                  <span>{prod.name}</span>
                </div>

                <h2 className={styles.productTitle}>{prod.title}</h2>
                <p className={styles.lead}>{prod.lead}</p>

                <ul className={styles.featuresList}>
                  {(Array.isArray(prod.features) ? prod.features : []).map(
                    (feat, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        {feat}
                      </li>
                    )
                  )}
                </ul>

                <p className={styles.forLabel}>
                  {t("productsPage.for", "Para:")}{" "}
                  <span className={styles.forDesc}>{prod.forDesc}</span>
                </p>

                <div className={styles.actions}>
                  <a
                    href={prod.visitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnPrimary}
                  >
                    {prod.visitText}
                  </a>
                  <button
                    type="button"
                    onClick={handleContactClick(prod.name)}
                    className={styles.btnGhost}
                  >
                    {prod.ghostText}
                  </button>
                </div>
              </div>

              {/* UI Preview Mockup */}
              <div
                className={styles.shot}
                role="img"
                aria-label={`Vista previa de ${prod.name}`}
              >
                <div className={styles.browserHeader}>
                  <div className={styles.windowDot} />
                  <div className={styles.windowDot} />
                  <div className={styles.windowDot} />
                </div>
                <div className={`${styles.bar} ${styles.w40}`} />
                <div className={`${styles.bar} ${styles.w80}`} />
                <div className={styles.panel}>
                  <span className={styles.badge}>{prod.name}</span>
                  <span>Captura de {prod.name}</span>
                </div>
                <div className={`${styles.bar} ${styles.w60}`} />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Banda CTA inferior */}
      <section className={styles.ctaBand} aria-label="Llamado a la acción">
        <div className={styles.ctaWrap}>
          <h2 className={styles.ctaTitle}>
            {t(
              "productsPage.factoryCta",
              "¿Querés algo así para tu empresa?"
            )}
          </h2>
          <a
            href="https://factory.holocruxe.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            {t("productsPage.factoryBtn", "Conocer la Factory")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
