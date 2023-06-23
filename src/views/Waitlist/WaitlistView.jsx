import React from 'react';
import Container from '../../components/Waitlist/waitlistcontainer';
<<<<<<< HEAD
import styles from '../../components/Waitlist/waitlist.module.css';
=======
import styles from "../../components/Waitlist/waitlist.module.css";
>>>>>>> c6511cc03bf62dee21cee7e9139bdcd871a9cdf4
import Waitlist from '../../components/Waitlist/waitlist2';
import { Canvas } from '@react-three/fiber';
import Stars from '../../components/Stars/stars2';

const WaitlistView = () => {
  return (
<<<<<<< HEAD
    <section id="waitlist" className={styles.waitlist}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Canvas
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <Stars />
        </Canvas>
        <Waitlist />
=======
    <section id="waitlist" className={styles.waitlist}>      
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}>
        <Canvas style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}>
          <Stars />
        </Canvas>
        <Waitlist/>
>>>>>>> c6511cc03bf62dee21cee7e9139bdcd871a9cdf4
      </div>
    </section>
  );
};

export default WaitlistView;