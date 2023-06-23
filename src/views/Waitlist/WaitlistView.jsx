import React from 'react';
import Container from '../../components/Waitlist/waitlistcontainer';
import styles from "../../components/Waitlist/waitlist.module.css";
import Waitlist from '../../components/Waitlist/waitlist2';
import { Canvas } from '@react-three/fiber';
import Stars from '../../components/Stars/stars2';

const WaitlistView = () => {
  return (
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
      </div>
    </section>
  );
};

export default WaitlistView;