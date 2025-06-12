import React, { Suspense, useEffect, useRef } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import CanvasLoader from './Loader';
import './earth.css';


const Earth = () => {
  const earthRef = useRef();
  const earth = useGLTF('./planet/scene.gltf');
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.007;
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={earth.scene}
      scale={ 3.1 }
      position={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  return (
    <div className="earth-container">
      <Canvas
        className="earth-canvas"
        style={{ marginTop: '-5rem' }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
