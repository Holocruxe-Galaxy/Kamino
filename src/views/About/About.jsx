import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const timelineItems = [
    {
      date: t("aboutPage.timeline.item1.date", "Abril 2023"),
      desc: t("aboutPage.timeline.item1.desc", "Nace Holocruxe en Córdoba."),
    },
    {
      date: t("aboutPage.timeline.item2.date", "Primeros clientes"),
      desc: t(
        "aboutPage.timeline.item2.desc",
        "Proyectos de logística y seguridad en Chile y México."
      ),
    },
    {
      date: t("aboutPage.timeline.item3.date", "Productos propios"),
      desc: t(
        "aboutPage.timeline.item3.desc",
        "Lanzamos Kira, Vinado, Cruxie y Cruxie WhatsApp."
      ),
    },
    {
      date: t("aboutPage.timeline.item4.date", "Hoy"),
      desc: t(
        "aboutPage.timeline.item4.desc",
        "10 personas, 3 países, 4 productos en producción."
      ),
    },
  ];

  const valuesItems = [
    {
      title: t("aboutPage.values.authenticity.title", "Autenticidad"),
      desc: t(
        "aboutPage.values.authenticity.desc",
        "Te decimos qué se puede hacer y qué no, antes de empezar."
      ),
    },
    {
      title: t("aboutPage.values.connection.title", "Conexión"),
      desc: t(
        "aboutPage.values.connection.desc",
        "Tecnología que acerca a las personas, no que las reemplaza."
      ),
    },
    {
      title: t("aboutPage.values.privacy.title", "Privacidad"),
      desc: t(
        "aboutPage.values.privacy.desc",
        "Cuidamos tus datos desde el diseño, no como agregado."
      ),
    },
  ];

  const teamMembers = [
    { name: "Nombre Apellido", role: "Co-founder & CEO" },
    { name: "Nombre Apellido", role: "Co-founder & CTO" },
    { name: "Nombre Apellido", role: "Head of AI" },
    { name: "Nombre Apellido", role: "Fullstack Developer" },
    { name: "Nombre Apellido", role: "Backend Developer" },
    { name: "Nombre Apellido", role: "Frontend Developer" },
    { name: "Nombre Apellido", role: "AI Specialist" },
    { name: "Nombre Apellido", role: "Product Designer" },
    { name: "Nombre Apellido", role: "DevOps & Cloud" },
    { name: "Nombre Apellido", role: "Operations & Growth" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const touchStartX = useRef(null);

  const toggleCardFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const updateVisibleCount = () => {
      const w = window.innerWidth;
      if (w <= 540) {
        setVisibleCount(1);
      } else if (w <= 820) {
        setVisibleCount(2);
      } else if (w <= 1100) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - visibleCount);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <main className={styles.container}>
      {/* 1. Layout Editorial: Narrativa (Hero + Historia) + Timeline */}
      <section className={styles.aboutHero} aria-label="Sobre Holocruxe">
        <div className={styles.wrap}>
          <div className={styles.editorialGrid}>
            {/* Columna Izquierda: Narrativa completa */}
            <div className={styles.narrative}>
              <h1 className={styles.mainTitle}>
                {t("aboutPage.hero.title", "Un equipo chico que construye en serio.")}
              </h1>
              <p className={styles.intro}>
                {t(
                  "aboutPage.hero.intro",
                  "Nacimos en Córdoba en abril de 2023. Hoy somos un equipo de 10 personas, 100% remoto, que trabaja para empresas de tres países."
                )}
              </p>

              <div className={styles.storyText}>
                <p>
                  {t(
                    "aboutPage.story.p1",
                    "Holocruxe empezó con una idea simple: la inteligencia artificial sirve cuando resuelve un problema concreto de una empresa, no cuando es una demo."
                  )}
                </p>
                <p>
                  {t(
                    "aboutPage.story.p2",
                    "Por eso hacemos dos cosas. Construimos software e IA para otras empresas, y construimos nuestros propios productos. Lo que aprendemos en uno lo aplicamos en el otro."
                  )}
                </p>
                <p>
                  {t(
                    "aboutPage.story.p3",
                    "No tenemos oficinas. Trabajamos de forma remota, con clientes en Argentina, Chile y México."
                  )}
                </p>
              </div>
            </div>

            {/* Columna Derecha: Timeline / Hitos */}
            <div className={styles.timelineCol}>
              <ol className={styles.timeline}>
                {timelineItems.map((item, index) => (
                  <li key={index} className={styles.timelineItem}>
                    <strong className={styles.timelineDate}>{item.date}</strong>
                    <span className={styles.timelineDesc}>{item.desc}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Lo que nos importa (Valores) */}
      <section className={styles.valuesSection} aria-label="Nuestros valores">
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>
            {t("aboutPage.values.title", "Lo que nos importa.")}
          </h2>

          <ul className={styles.valuesGrid}>
            {valuesItems.map((val, idx) => (
              <li key={idx} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{val.title}</h3>
                <p className={styles.valueDesc}>{val.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. El equipo (Carrusel automático de 10 personas con flechas) */}
      <section className={styles.teamSection} aria-label="Equipo de trabajo">
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>
            {t("aboutPage.team.title", "El equipo que lo hace posible.")}
          </h2>

          <div
            className={styles.carouselContainer}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Flecha Izquierda */}
            <button
              type="button"
              className={`${styles.carouselArrow} ${styles.prevArrow}`}
              onClick={handlePrev}
              aria-label="Ver miembros anteriores"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Viewport del Carrusel */}
            <div className={styles.carouselViewport}>
              <div
                className={styles.carouselTrack}
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                }}
              >
                {teamMembers.map((member, i) => (
                  <div key={i} className={styles.carouselSlide}>
                    <div
                      className={styles.memberCard}
                      onClick={() => toggleCardFlip(i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleCardFlip(i);
                        }
                      }}
                      aria-label={`${member.name}, ${member.role}. Ver avatar`}
                    >
                      <div
                        className={`${styles.cardInner} ${
                          flippedCards[i] ? styles.cardFlipped : ""
                        }`}
                      >
                        {/* Frente: Foto / Datos del miembro */}
                        <div className={styles.cardFront}>
                          <div className={styles.avatarPlaceholder} aria-hidden="true">
                            <svg
                              width="42"
                              height="42"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={styles.avatarIcon}
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span className={styles.avatarLabel}>Foto</span>
                          </div>
                          <strong className={styles.memberName}>{member.name}</strong>
                          <span className={styles.memberRole}>{member.role}</span>
                          <span className={styles.flipBadge}>Hover para avatar ↻</span>
                        </div>

                        {/* Dorso: Espacio para Avatar ilustrado/3D */}
                        <div className={styles.cardBack}>
                          <div className={styles.avatarBackFrame} aria-hidden="true">
                            <div className={styles.avatarBackGlow} />
                            <svg
                              width="46"
                              height="46"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={styles.avatarBackIcon}
                            >
                              <circle cx="12" cy="8" r="4" />
                              <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
                              <path d="M12 2v2" />
                              <path d="M4.93 4.93l1.41 1.41" />
                              <path d="M19.07 4.93l-1.41 1.41" />
                            </svg>
                            <span className={styles.avatarBackBadge}>Avatar</span>
                          </div>
                          <strong className={styles.memberNameBack}>{member.name}</strong>
                          <span className={styles.memberRoleBack}>{member.role}</span>
                          <span className={styles.teamTag}>Holocruxe Team</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flecha Derecha */}
            <button
              type="button"
              className={`${styles.carouselArrow} ${styles.nextArrow}`}
              onClick={handleNext}
              aria-label="Ver siguientes miembros"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Indicadores de paginación */}
          <div className={styles.carouselDots} aria-hidden="true">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.dot} ${
                  currentIndex === idx ? styles.activeDot : ""
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir a grupo de miembros ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;