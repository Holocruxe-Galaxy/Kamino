import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import { forceScrollTop } from "../../utils/scroll";
import {
  CAROUSEL_BREAKPOINTS,
  CAROUSEL_VISIBLE_COUNTS,
  CAROUSEL_AUTOPLAY_INTERVAL_MS,
  CAROUSEL_SWIPE_THRESHOLD_PX,
} from "../../features/about/constants/carousel.constants";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    forceScrollTop();
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
    { name: "Andy", role: "CEO & Founder", image: "/images/Andy.webp" },
    { name: "Fabro", role: "CPO & Founder", image: "/images/Fabro.webp" },
    { name: "Alex", role: "Backend Developer", image: "/images/Alex.webp" },
    { name: "Jalu", role: "Software Architect", image: "/images/Jalu.webp" },
    { name: "Facu", role: "AI Developer", image: "/images/Facu.webp" },
    { name: "Ro", role: "Frontend Developer", image: "/images/Ro.webp" },
    { name: "Chris", role: "Backend Developer", image: "/images/Chris.webp" },
    { name: "Ceci", role: "Product & Graphic Designer", image: "/images/Ceci.webp" },
    { name: "Bruno", role: "AI Automation Developer", image: "/images/Bruno.webp" },
    { name: "Daf", role: "Growth Marketing Manager", image: "/images/Daff.webp" },
    { name: "Gera", role: "Sales Manager", image: "/images/Gera.webp" },
    { name: "Gabi", role: "Product & UX/UI Designer", image: "/images/Gabi.webp" },
    { name: "Gianni", role: "Frontend Developer", image: "/images/Gianni.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      const w = window.innerWidth;
      if (w <= CAROUSEL_BREAKPOINTS.MOBILE) {
        setVisibleCount(CAROUSEL_VISIBLE_COUNTS.MOBILE);
      } else if (w <= CAROUSEL_BREAKPOINTS.TABLET) {
        setVisibleCount(CAROUSEL_VISIBLE_COUNTS.TABLET);
      } else if (w <= CAROUSEL_BREAKPOINTS.LAPTOP) {
        setVisibleCount(CAROUSEL_VISIBLE_COUNTS.LAPTOP);
      } else {
        setVisibleCount(CAROUSEL_VISIBLE_COUNTS.DESKTOP);
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
    }, CAROUSEL_AUTOPLAY_INTERVAL_MS);
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
    if (Math.abs(diff) > CAROUSEL_SWIPE_THRESHOLD_PX) {
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
                )}
              </p>

              <div className={styles.storyText}>
                <p>
                  {t(
                    "aboutPage.story.p1",
                  )}
                </p>
                <p>
                  {t(
                    "aboutPage.story.p2",
                  )}
                </p>
                <p>
                  {t(
                    "aboutPage.story.p3",
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
                      aria-label={`${member.name}, equipo de Holocruxe`}
                    >
                      <div className={styles.avatarFrame}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className={styles.avatarImg}
                          loading="lazy"
                        />
                      </div>
                      <strong className={styles.memberName}>{member.name}</strong>
                      {member.role && (
                        <span className={styles.memberRole}>{member.role}</span>
                      )}
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