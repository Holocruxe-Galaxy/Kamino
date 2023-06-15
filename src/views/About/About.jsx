import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mission}>
        <h3 className={styles.title}>
          ¿Quienes <br /> somos?
        </h3>
        <p className={styles.text}>
          En Holocruxe somos un equipo apasionado que creemos en el poder de los
          recuerdos y las experiencias. Nuestra misión en Holocruxe es ofrecer
          una plataforma integral que capture todos los momentos significativos
          y experiencias de vida de cada individuo. Queremos ayudar a las
          personas a conectar todos los aspectos de su existencia en un único
          lugar digital, donde se puedan vincular con todas sus redes sociales y
          generar un diario virtual interactivo. Con la ayuda de la inteligencia
          artificial, nuestra aplicación tiene como objetivo recrear la vida de
          una persona de manera auténtica y dinámica. Esto permite a nuestros
          usuarios revivir sus recuerdos de una manera más rica y profunda,
          creando un diario virtual que captura la esencia misma de su vida.
        </p>
      </div>

      <div className={styles.values}>
        <h3 className={styles.title}>Nuestros Valores</h3>
        <div className={styles.value}>
          <strong>Autenticidad</strong>
          <p>
            Fomentar la honestidad y la autenticidad al capturar y compartir
            recuerdos, alentando a los usuarios a ser ellos mismos y a compartir
            sus experiencias tal como las vivieron.
          </p>
        </div>
        <div className={styles.value}>
          <strong>Conexion</strong>
          <p>
            Promover la conexión humana al permitir a los usuarios compartir sus
            recuerdos con amigos, familiares y seres queridos, y proporcionar
            herramientas para fortalecer los lazos y las relaciones.
          </p>
        </div>
        <div className={styles.value}>
          <strong>Privacidad</strong>
          <p>
            Respetar la privacidad de los usuarios y brindarles opciones claras
            y transparentes sobre cómo se utilizan y comparten sus datos
            personales. Garantizar medidas de seguridad sólidas para proteger la
            información sensible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
