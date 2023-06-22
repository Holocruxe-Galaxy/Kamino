import React, { useRef, Suspense, useState, useEffect } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import styles from './modelviewer.css?inline';
import Lights from "./lights";

const Model = ({ scene, scale, position, mixer }) => {
  useFrame((state, delta) => mixer.update(delta));
  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
    />
  );
};

const ModelLoader = ({ modelPath, modelScale }) => {
  const { scene, animations } = useGLTF(modelPath);
  const initialized = useRef(false);
  const [mixer, setMixer] = useState(null);

  useThree(() => {
    if (!initialized.current) {
      const mix = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => mix.clipAction(clip).play());
      setMixer(mix);
      initialized.current = true;
    }
  });

  return mixer ? <Model scene={scene} scale={modelScale} position={[-0.5, 0, 0]} mixer={mixer} /> : null;
};

const ModelViewer = ({ modelPath, modelScale = 14 }) => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        style={{ width: '800px', height: '500px', top: '150px' }}
      >
        <Lights/>
        <directionalLight position={[2.5, 8, 5]} intensity={1} />
        <directionalLight position={[-2.5, -8, -5]} intensity={0.7} />
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ModelLoader modelPath={modelPath} modelScale={modelScale} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
