import React from 'react';
// import LegacyModelCanvas from '../models/trash/legacy';
import Waitlist from './waitlist';
import { Canvas } from '@react-three/fiber';
// import Stars from '../trash/Stars/stars';

const Container = React.forwardRef((props, ref) => {
  return (
    <div
      id="waitlist"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        {/* <Stars /> */}
      </Canvas>
      <Waitlist />
    </div>
  );
});

export default Container;
