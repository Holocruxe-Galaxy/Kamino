import React, { useEffect } from "react";
import styles from "./About.module.css";

const About = () => {
  const hasVisited = sessionStorage.getItem("visited");

  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.mission}>
        <h3 className={styles.title}>WHO WE ARE?</h3>
        <p className={styles.text}>
          At Holocruxe we are a passionate team that believes in the power of
          memories and experiences.
          <br />
          <br />
          Holocruxe is a company that creates a platform to help people capture
          and preserve their memories. The platform uses artificial intelligence
          to create a virtual diary that captures the essence of a preson's
          life. This allows users to relive their memories in a richer and
          depper way.
        </p>
      </div>

      <div className={styles.vertical_line}></div>
      <div className={styles.values}>
        <h3 className={styles.title}>OUR VALUES</h3>
        <div className={styles.value}>
          <strong>Authenticity</strong>
          <p>
            Promote honesty and authenticity by capturing and sharing memories,
            ecouraging users to be themselves and share their experiences as
            they lived them.
          </p>
        </div>
        <div className={styles.value}>
          <strong>Connection</strong>
          <p>
            Promote human connection by enabling users to share theirmemories
            with friends , family and loved ones, and provide toold to
            strengthen bonds and relationships.
          </p>
        </div>
        <div className={styles.value}>
          <strong>Privacy</strong>
          <p>
            Respecting users' privacy and providing them with clear and
            transparent choices about how their personal data is used and
            shared. Ensure robust security measures to protect sensitive
            information,
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
