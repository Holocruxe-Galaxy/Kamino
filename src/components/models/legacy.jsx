import React, { Suspense, useRef } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader"; 
import { Canvas } from "@react-three/fiber";
import styles from './legacy.css?inline';

const LegacyModel = () => {
  const modelRef = useRef();
  const model = useGLTF("./holocruxe/holocruxerecor.glb");  

 
  return (
    <group>
    <ambientLight intensity={0.5} />
    <directionalLight position={[2.5, 1, 5]} intensity={1.5} />
    <primitive
      ref={modelRef}
      object={model.scene}
      scale={1.6} 
      position={[2, -0.1, 1]} 
      rotation={[0, Math.PI, 0]}
      />
      </group>
  );
};

const LegacyModelCanvas = () => {
  return (
        <div className={styles.canvasContainer}>
    <Canvas className="legacy-model-canvas" style={{ width: '1200px', height: '500px', left: '-120px' }}>
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
  enableZoom={false}
  enablePan={false}
  enableRotate={false}
  maxPolarAngle={Math.PI / 2}
  minPolarAngle={Math.PI / 2}/>
        <LegacyModel />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
  );
};

export default LegacyModelCanvas;
