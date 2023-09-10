import React, { Suspense, useRef } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import CanvasLoader from './trash/Loader';
import { Canvas } from '@react-three/fiber';
import './earth.css';
// import Stars from '../Stars/stars';
// import CircleSvg from '../../icons/Ellipse 3.svg';
// import IconSvg from '../../icons/mouse.svg';

const Earth = () => {
  const earthRef = useRef();
  const earth = useGLTF('./planet/scene.gltf');

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003; // velocidad de rotacion
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={earth.scene}
      scale={2.8}
      position={[0, 0.5, 0]} //la posicion!
    />
  );
};

const EarthCanvas = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Canvas className="earth-canvas" style={{ height: '600px' }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          {/* <Stars /> */}
          <Preload all />
        </Suspense>
      </Canvas>
      {/* <div className="svg-click">
        <img
          src={CircleSvg}
          alt="circle"
          style={{ position: 'absolute', bottom: '300px', right: '100px' }}
        />
        <img
          src={IconSvg}
          alt="icon"
          style={{ position: 'absolute', bottom: '320px', right: '115px' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '250px',
            right: '100px',
            userSelect: 'none',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <p>Click in</p>
          <p>the world</p>
        </div>
      </div> */}
    </div>
  );
};

export default EarthCanvas;
