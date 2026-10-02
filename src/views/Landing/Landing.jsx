import { useEffect } from 'react';
import styles from './Landing.module.css';
import Hero from '../../components/Hero/Hero';
import Facts from '../../components/Hero/Facts';
import Offer from '../../components/HomeSections/Offer';
import HomeProducts from '../../components/HomeSections/HomeProducts';
import Cases from '../../components/HomeSections/Cases';
import Values from '../../components/HomeSections/Values';
import CtaBand from '../../components/HomeSections/CtaBand';
import { useFirstVisit } from "../../hooks";

const Landing = () => {
  const hasVisited = useFirstVisit();

  useEffect(() => {
    if (window.location.hash === '#contacto') {
      const timer = setTimeout(() => {
        const el = document.getElementById('contacto');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className={`${styles.container} ${!hasVisited ? styles.containerAnim : ''}`}>
      {/* 1. Hero principal con SVG interactivo */}
      <Hero />

      {/* 2. Franja de métricas / datos de la empresa */}
      <Facts />

      {/* 3. Tres formas de trabajar con nosotros */}
      <Offer />

      {/* 4. Nuestros productos en producción */}
      <HomeProducts />

      {/* 5. Proyectos para empresas en distintas industrias */}
      <Cases />

      {/* 6. Cómo trabajamos (Valores) */}
      <Values />

      {/* 7. Banda CTA interactiva con formulario desplegable */}
      <CtaBand />
    </main>
  );
};

export default Landing;
