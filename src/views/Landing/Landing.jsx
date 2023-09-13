
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Landing.module.css';
import Hero from '../../components/Hero/Hero';
import Hero2 from '../../components/Hero/Hero2';
import Hero3 from '../../components/Hero/Hero3';
// import Feature from '../../components/Feature/Feature';
import EarthCanvas from '../../components/models/Earth';
import Container from '../../components/Waitlist/waitlistcontainer';
import { Canvas } from '@react-three/fiber';
// import Stars from "../../components/Stars/stars";
import vector from '../../../public/img/vector.js';
import Hero4 from '../../components/Hero/Hero4';


const Landing = () => {
  const svgDiv = useRef();
  const { scrollYProgress } = useScroll({
    target: svgDiv,
    offset: ['start end', 'end start'],
  });
  const length = useTransform(scrollYProgress, [0.07, 0.86], [0, 1]);
  const length2 = useTransform(scrollYProgress, [0.35, 1.175], [0, 1]);
  const length3 = useTransform(scrollYProgress, [0.65, 0.825], [0, 1]);

  const hasVisited = sessionStorage.getItem('visited');
  const waitlistRef = useRef(null);

  useEffect(() => {
    console.log(hasVisited);
    if (!hasVisited) {
      sessionStorage.setItem('visited', 'true');
    }
  }, []);

  return (
    <main
      className={`${styles.container} ${
        !hasVisited && location.pathname === '/' && styles.containerAnim
      }`}
    >
      <Canvas
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: '-1',
        }}
      >
        {/* <Stars /> */}
      </Canvas>
      <div className={isMobile ? "disable-touch" : ""}>
        <EarthCanvas />
      </div>

      <div className={styles.vector_container}>
        <img className={styles.vector01} src={vector.vector01} alt="" />
      </div>
      <Hero />
      <div className={styles.vector_container}>
        <img className={styles.vector03} src={vector.vector03} alt="" />
      </div>
      <Hero2 />
      <div className={styles.vector_container}>
        <img className={styles.vector05} src={vector.vector05} alt="" />
      </div>
      <Hero3 />
      <div className={styles.vector_container}>
        <img className={styles.vector07} src={vector.vector07} alt="" />
      </div>
      <div className={styles.vector_container}>
        <img className={styles.vector08} src={vector.vector08} alt="" />

      </div>
      <Hero4/>
      <Container ref={waitlistRef} />
    </main>
  );
};


export default Landing;
