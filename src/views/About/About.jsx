import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import { forceScrollTop } from "../../utils/scroll";
import {
  CAROUSEL_BREAKPOINTS,
  CAROUSEL_VISIBLE_COUNTS,
  CAROUSEL_AUTOPLAY_INTERVAL_MS,
  CAROUSEL_SWIPE_THRESHOLD_PX,
} from "../../features/about/constants/carousel.constants";
import { TEAM_MEMBERS } from "../../features/about/data/teamMembers";
import { TIMELINE_ITEMS } from "../../features/about/data/timelineData";
import { VALUES_ITEMS } from "../../features/about/data/valuesData";
import {
  useVisibleCount,
  useCarousel,
  useAutoplay,
  useSwipe,
} from "../../hooks";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    forceScrollTop();
  }, []);

  const visibleCount = useVisibleCount(
    CAROUSEL_BREAKPOINTS,
    CAROUSEL_VISIBLE_COUNTS
  );

  const {
    currentIndex,
    maxIndex,
    handleNext,
    handlePrev,
    goTo,
  } = useCarousel({
    totalItems: TEAM_MEMBERS.length,
    visibleCount,
  });

  const { setIsPaused } = useAutoplay({
    onTick: handleNext,
    intervalMs: CAROUSEL_AUTOPLAY_INTERVAL_MS,
    isEnabled: maxIndex > 0,
  });

  const { onTouchStart, onTouchEnd } = useSwipe({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrev,
    threshold: CAROUSEL_SWIPE_THRESHOLD_PX,
  });

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
                {TIMELINE_ITEMS.map((item) => (
                  <li key={item.id} className={styles.timelineItem}>
                    <strong className={styles.timelineDate}>
                      {t(item.dateKey, item.dateFallback)}
                    </strong>
                    <span className={styles.timelineDesc}>
                      {t(item.descKey, item.descFallback)}
                    </span>
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
            {VALUES_ITEMS.map((val) => (
              <li key={val.id} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>
                  {t(val.titleKey, val.titleFallback)}
                </h3>
                <p className={styles.valueDesc}>
                  {t(val.descKey, val.descFallback)}
                </p>
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
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
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
                {TEAM_MEMBERS.map((member, i) => (
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
                onClick={() => goTo(idx)}
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