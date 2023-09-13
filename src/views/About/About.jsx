import { useEffect } from 'react';
import styles from './About.module.css';
import vector from '../../img/vector';

const About = () => {
  const hasVisited = sessionStorage.getItem('visited');

  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem('visited', 'true');
    }
  }, []);

  return (
    <div className={styles.container}>
      
      <div className={styles.text_section}>
        <div className={styles.text_title}>
          <h2>WHO WE ARE?</h2>
        </div>
        <img src={vector.vector33} alt="" className={styles.vector1}/>
      </div>
      <article className={styles.text}>
        <p>
          <span className={styles.titleSmall}>At Holocruxe </span>
          we are a passionate team that believes in the power of
          memories and experiences.
        </p> 
        <pre><br /></pre>
        <p>
          Holocruxe is a company that creates a platform to help people capture
          and preserve their memories. The platform uses artificial intelligence
          to create a virtual diary that captures the essence of a person's
          life. This allows users to relive their memories in a richer and
          deeper way.`
        </p>
      </article>
      <div className={styles.text_section}>
        <div className={styles.text_title}>
          <h2>OUR VALUES</h2>
        </div>
          <div className={styles.vector2}>
            <div>
              <img src={vector.vector34} alt="" className={styles.vectorD} />
            </div>
            <div className={styles.vector3}>
            <img src={vector.vector36} alt="" className={styles.vectorI}/>
            {/* <img src={vector.vector37} alt="" className={styles.vectorI} /> */}
            </div>
          </div>
      </div>
            
      <div className={styles.values}>
        
        <div className={styles.value}>
          <h3 className={styles.title} >Authenticity</h3>
          <p>
            Promote honesty and authenticity by capturing and sharing memories,
            ecouraging users to be themselves and share their experiences as
            they lived them.
          </p>
        </div>
        <div className={styles.value}>
          <h3 className={styles.title}>Connection</h3>
          <p>
            Promote human connection by enabling users to share theirmemories
            with friends , family and loved ones, and provide toold to
            strengthen bonds and relationships.
          </p>
        </div>
        <div className={styles.value}>
          <h3 className={styles.title}>Privacy</h3>
          <p>
            Respecting users' privacy and providing them with clear and
            transparent choices about how their personal data is used and
            shared. Ensure robust security measures to protect sensitive
            information.
          </p>
        </div>
      </div>
      <img src="/public/img/rob04.png" alt="robot apoyado"  className={styles.robot}/>
    </div>
  );
};

export default About;
