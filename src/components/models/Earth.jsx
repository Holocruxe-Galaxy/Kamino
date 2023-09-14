import { Suspense, useRef } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useFrame, Canvas } from '@react-three/fiber';
import CanvasLoader from './Loader';
import './earth.css';

import CircleSvg from '../../icons/Ellipse 3.svg';
import IconSvg from '../../icons/mouse.svg';

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
      scale={3}
      position={[0, 0.5, 0]} //la posicion!
    />
  );
};

const EarthCanvas = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Canvas className="earth-canvas" style={{ maxHeight: '35rem' ,minHeigth: '30rem'  ,marginTop: '4rem' }}>
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
      <div className="svg-click">
        <img
          src={CircleSvg}
          alt="circle"
          style={{ position: 'absolute', bottom: '100px', right: '100px' }}
        />
        <img
          src={IconSvg}
          alt="icon"
          style={{ position: 'absolute', bottom: '120px', right: '115px' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            right: '100px',
            userSelect: 'none',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <p>Click in</p>
          <p>the world</p>
        </div>
      </div>
    </div>
  );
};

export default EarthCanvas;
