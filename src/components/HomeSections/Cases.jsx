import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./cases.module.css";

const Cases = () => {
  const { t } = useTranslation();

  const defaultIndustries = [
    "Banca",
    "Energía renovable",
    "Sector público",
    "Logística",
    "Seguridad y transporte",
    "Fintech",
    "Agro",
  ];

  const industries = t("cases.industries", {
    returnObjects: true,
    defaultValue: defaultIndustries,
  });

  const casesData = [
    {
      where: t("cases.case1Where", "Banca · México"),
      title: t("cases.case1Title", "Arquitectura con IA para un banco"),
      desc: t(
        "cases.case1Desc",
        "Diseñamos la arquitectura con IA para modernizar el core de un banco."
      ),
      model: t("cases.case1Model", "Proyecto a medida"),
    },
    {
      where: t("cases.case2Where", "Energía renovable · México"),
      title: t("cases.case2Title", "Dos agentes de IA en producción"),
      desc: t(
        "cases.case2Desc",
        "Un agente revisa contratos legales y otro calcula consumos de energía, dentro de un equipo dedicado."
      ),
      model: t("cases.case2Model", "Equipo dedicado + IA"),
    },
    {
      where: t("cases.case3Where", "Sector público · Argentina"),
      title: t("cases.case3Title", "Desarrollo para un municipio"),
      desc: t(
        "cases.case3Desc",
        "Optimizamos la atención ciudadana y trámites vecinales integrando agentes de IA."
      ),
      model: t("cases.case3Model", "Proyecto a medida"),
    },
  ];

  return (
    <section className={styles.casesSection} aria-label="Proyectos para empresas">
      <div className={styles.wrap}>
        <h2 className={styles.title}>
          {t("cases.title", "Proyectos para empresas en distintas industrias.")}
        </h2>

        <ul className={styles.industries}>
          {(Array.isArray(industries) ? industries : defaultIndustries).map(
            (ind, index) => (
              <li key={index} className={styles.industryTag}>
                {ind}
              </li>
            )
          )}
        </ul>

        <div className={styles.casesGrid}>
          {casesData.map((c, index) => (
            <article key={index} className={styles.caseCard}>
              <span className={styles.where}>{c.where}</span>
              <h3>{c.title}</h3>
              <p className={styles.caseDesc}>{c.desc}</p>
              <span className={styles.model}>{c.model}</span>
            </article>
          ))}
        </div>

        <div className={styles.moreWrap}>
          <NavLink to="/projects" className={styles.moreLink}>
            {t("cases.moreLink", "Ver todos los proyectos")} →
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Cases;
