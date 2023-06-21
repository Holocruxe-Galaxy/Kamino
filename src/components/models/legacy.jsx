import React, { Suspense, useRef } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import CanvasLoader from "./Loader"; 
import { Canvas } from "@react-three/fiber";
import styles from './legacy.css?inline';

const LegacyModel = () => {
  const modelRef = useRef();
  const model = useGLTF("./holocruxe/holocruxelogov2.gltf"); 
 

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002; 
    }
  });

  return (
    <group>
    <ambientLight intensity={0.5} />
    <directionalLight position={[2.5, 8, 5]} intensity={1} />
    <primitive
      ref={modelRef}
      object={model.scene}
      scale={1} 
      position={[-1.7, -0.1, 0]} 
      />
      </group>
  );
};

const LegacyModelCanvas = () => {
  return (
        <div className={styles.canvasContainer}>

    <Canvas className="legacy-model-canvas" style={{ width: '1200px', height: '700px' }}>
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
  enableZoom={false}
  enablePan={false}
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
