import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./offer.module.css";
import { EXTERNAL_LINKS } from "../../constants/externalLinks";

const Offer = () => {
  const { t } = useTranslation();

  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("contacto");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "contacto";
    }
  };

  return (
    <section className={styles.offerSection} aria-label="Tres formas de trabajar con nosotros">
      <div className={styles.wrap}>
        <h2 className={styles.title}>
          {t("offer.title", "Tres formas de trabajar con nosotros.")}
        </h2>

        <div className={styles.offerGrid}>
          {/* Card Factory */}
          <div className={styles.cardFactory}>
            <span className={styles.bigDot} aria-hidden="true" />
            <div>
              <h3>
                {t(
                  "offer.factoryTitle",
                  "Tu prueba de concepto, funcionando en una semana."
                )}
              </h3>
              <p>
                {t(
                  "offer.factoryDesc",
                  "Acotamos juntos el alcance y en una semana tenés algo real para probar. Después decidís si pasar a MVP, escalar o frenar."
                )}
              </p>
            </div>
            <a
              href={EXTERNAL_LINKS.FACTORY}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhite}
            >
              {t("offer.factoryBtn", "Conocer la Factory")}
            </a>
          </div>

          {/* Cards Laterales */}
          <div className={styles.offerSide}>
            <div className={styles.cardSoft}>
              <h3>{t("offer.customTitle", "Desarrollo a medida")}</h3>
              <p>
                {t(
                  "offer.customDesc",
                  "Backend, integraciones, plataformas y agentes de IA para tu operación."
                )}
              </p>
              <NavLink to="/projects" className={styles.cardLink}>
                {t("offer.customBtn", "Ver proyectos")} →
              </NavLink>
            </div>

            <div className={styles.cardSoft}>
              <h3>{t("offer.dedicatedTitle", "Equipo dedicado")}</h3>
              <p>
                {t(
                  "offer.dedicatedDesc",
                  "Sumamos desarrolladores e IA a tu producto, trabajando con tu equipo."
                )}
              </p>
              <a
                href="/#contacto"
                onClick={handleContactClick}
                className={styles.cardLink}
              >
                {t("offer.dedicatedBtn", "Consultar")} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
