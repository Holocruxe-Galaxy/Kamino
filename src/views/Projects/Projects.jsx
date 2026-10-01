import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import { forceScrollTop } from "../../utils/scroll";

const Projects = () => {
  const { t } = useTranslation();

  useEffect(() => {
    forceScrollTop();
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = "/#contacto";
  };

  const projectCases = [
    {
      where: t("projectsPage.cases.case1.where", "Banca · México"),
      title: t("projectsPage.cases.case1.title", "Arquitectura con IA para un banco"),
      desc: t(
        "projectsPage.cases.case1.desc",
        "Diseñamos la arquitectura con IA para modernizar el core de un banco."
      ),
      model: t("projectsPage.cases.case1.model", "Proyecto a medida"),
    },
    {
      where: t("projectsPage.cases.case2.where", "Energía renovable · México"),
      title: t("projectsPage.cases.case2.title", "Dos agentes de IA en producción"),
      desc: t(
        "projectsPage.cases.case2.desc",
        "Un agente revisa contratos legales y otro calcula consumos de energía, dentro de un equipo dedicado."
      ),
      model: t("projectsPage.cases.case2.model", "Equipo dedicado + IA"),
    },
    {
      where: t("projectsPage.cases.case3.where", "Sector público · Argentina"),
      title: t("projectsPage.cases.case3.title", "Desarrollo para un municipio"),
      desc: t(
        "projectsPage.cases.case3.desc",
        "Optimizamos la atención ciudadana y trámites vecinales integrando agentes de IA."
      ),
      model: t("projectsPage.cases.case3.model", "Proyecto a medida"),
    },
    {
      where: t("projectsPage.cases.case4.where", "Seguridad y transporte · Chile"),
      title: t("projectsPage.cases.case4.title", "Plataforma de flota con GPS"),
      desc: t(
        "projectsPage.cases.case4.desc",
        "Construimos la plataforma de seguimiento de flota por GPS y el portal para sus clientes."
      ),
      model: t("projectsPage.cases.case4.model", "Proyecto a medida"),
    },
    {
      where: t("projectsPage.cases.case5.where", "Logística · Chile"),
      title: t("projectsPage.cases.case5.title", "Modernización de backend y APIs"),
      desc: t(
        "projectsPage.cases.case5.desc",
        "Rediseñamos y modernizamos el backend y las APIs de una empresa de logística."
      ),
      model: t("projectsPage.cases.case5.model", "Proyecto a medida"),
    },
    {
      where: t("projectsPage.cases.case6.where", "Logística · México"),
      title: t("projectsPage.cases.case6.title", "Integraciones con marketplaces y couriers"),
      desc: t(
        "projectsPage.cases.case6.desc",
        "Integramos la operación con Mercado Libre y con empresas de courier."
      ),
      model: t("projectsPage.cases.case6.model", "Proyecto a medida"),
    },
    {
      where: t("projectsPage.cases.case7.where", "Fintech · México"),
      title: t("projectsPage.cases.case7.title", "Equipo de desarrollo dedicado"),
      desc: t(
        "projectsPage.cases.case7.desc",
        "Sumamos un equipo de desarrollo al producto de una fintech."
      ),
      model: t("projectsPage.cases.case7.model", "Equipo dedicado"),
    },
    {
      where: t("projectsPage.cases.case8.where", "Agro · Argentina"),
      title: t("projectsPage.cases.case8.title", "MVP para una cooperativa"),
      desc: t(
        "projectsPage.cases.case8.desc",
        "Construimos un MVP para una cooperativa agropecuaria del sur de Córdoba."
      ),
      model: t("projectsPage.cases.case8.model", "MVP"),
    },
  ];

  const models = [
    {
      title: t("projectsPage.models.poc.title", "Prueba de concepto"),
      desc: t(
        "projectsPage.models.poc.desc",
        "Una semana para validar una idea con algo que funciona."
      ),
    },
    {
      title: t("projectsPage.models.custom.title", "Proyecto a medida"),
      desc: t(
        "projectsPage.models.custom.desc",
        "Diseñamos y construimos la solución completa, del alcance a producción."
      ),
    },
    {
      title: t("projectsPage.models.team.title", "Equipo dedicado"),
      desc: t(
        "projectsPage.models.team.desc",
        "Desarrolladores e IA integrados a tu equipo y a tu producto."
      ),
    },
  ];

  return (
    <main className={styles.container}>
      {/* 1. Page Hero */}
      <section className={styles.pageHero} aria-label="Introducción a Proyectos">
        <div className={styles.wrap}>
          <h1 className={styles.mainTitle}>
            {t(
              "projectsPage.hero.title",
              "Proyectos para empresas de Argentina, Chile y México."
            )}
          </h1>
          <p className={styles.intro}>
            {t(
              "projectsPage.hero.intro",
              "Banca, energía, sector público, logística, seguridad, fintech y agro. Por confidencialidad no nombramos a nuestros clientes: te contamos qué problema resolvimos."
            )}
          </p>
        </div>
      </section>

      {/* 2. Grid de Casos de Éxito */}
      <section className={styles.casesSection} aria-label="Casos de proyectos">
        <div className={styles.wrap}>
          <div className={styles.casesGrid}>
            {projectCases.map((item, index) => (
              <article key={index} className={styles.caseCard}>
                <span className={styles.where}>{item.where}</span>
                <h3 className={styles.caseTitle}>{item.title}</h3>
                <p className={styles.caseDesc}>{item.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.modelBadge}>{item.model}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tres modelos según lo que necesites */}
      <section className={styles.modelsSection} aria-label="Modelos de contratación">
        <div className={styles.wrap}>
          <h2 className={styles.modelsTitle}>
            {t("projectsPage.models.title", "Tres modelos, según lo que necesites.")}
          </h2>

          <div className={styles.modelsGrid}>
            {models.map((model, idx) => (
              <div key={idx} className={styles.modelItem}>
                <h3 className={styles.modelItemTitle}>{model.title}</h3>
                <p className={styles.modelItemDesc}>{model.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              onClick={handleContactClick}
              className={styles.btnPrimary}
            >
              {t("projectsPage.actions.contact", "Contanos tu proyecto")}
            </button>
            <a
              href="https://factory.holocruxe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              {t("projectsPage.actions.factory", "Ver la Factory")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
