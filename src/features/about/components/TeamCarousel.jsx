import { useTranslation } from "react-i18next";
import styles from "./TeamCarousel.module.css";
import MemberCard from "./MemberCard";
import CarouselArrow from "./CarouselArrow";
import CarouselDots from "./CarouselDots";
import {
  CAROUSEL_BREAKPOINTS,
  CAROUSEL_VISIBLE_COUNTS,
  CAROUSEL_AUTOPLAY_INTERVAL_MS,
  CAROUSEL_SWIPE_THRESHOLD_PX,
} from "../constants/carousel.constants";
import { TEAM_MEMBERS } from "../data/teamMembers";
import {
  useVisibleCount,
  useCarousel,
  useAutoplay,
  useSwipe,
} from "../../../hooks";

export const TeamCarousel = ({ members = TEAM_MEMBERS }) => {
  const { t } = useTranslation();

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
    totalItems: members.length,
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
          <CarouselArrow direction="prev" onClick={handlePrev} />

          <div className={styles.carouselViewport}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {members.map((member, i) => (
                <div key={i} className={styles.carouselSlide}>
                  <MemberCard member={member} />
                </div>
              ))}
            </div>
          </div>

          <CarouselArrow direction="next" onClick={handleNext} />
        </div>

        <CarouselDots
          count={maxIndex + 1}
          activeIndex={currentIndex}
          onSelect={goTo}
        />
      </div>
    </section>
  );
};

export default TeamCarousel;
