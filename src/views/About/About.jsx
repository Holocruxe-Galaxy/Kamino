import { useEffect } from "react";
import styles from "./About.module.css";
import { forceScrollTop } from "../../utils/scroll";
import {
  AboutHero,
  AboutValues,
  TeamCarousel,
} from "../../features/about/components";

const About = () => {
  useEffect(() => {
    forceScrollTop();
  }, []);

  return (
    <main className={styles.container}>
      <AboutHero />
      <AboutValues />
      <TeamCarousel />
    </main>
  );
};

export default About;