// hooks
import { useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
// estilos
import styles from './Landing.module.css';
// imagenes
import vector from '../../img/vector';
import EarthCanvas from '../../components/models/Earth';
import Stars from '../../components/Stars/stars';
// componentes
import Container from '../../components/Waitlist/waitlistcontainer';
import Hero from '../../components/Hero/Hero';
import Hero2 from '../../components/Hero/Hero2';
import Hero3 from '../../components/Hero/Hero3';
import Hero4 from '../../components/Hero/Hero4';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';


const Landing = () => {

  const hasVisited = sessionStorage.getItem('visited');
  const waitlistRef = useRef(null);

  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem('visited', 'true');
    }
  }, []);

  return (
    <main
      className={`${styles.container} ${
        !hasVisited && location.pathname === "/" && styles.containerAnim
      }`}
    >
      {/* <Canvas
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
      >
        <Stars />
      </Canvas> */}

      <EarthCanvas />

      <div className={styles.vector_container}>
        <img className={styles.vector01} src={vector.vector01} alt="" />
      </div>
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Container ref={waitlistRef} />
      <ScrollToTop />
    </main>
  );
};

export default Landing;
