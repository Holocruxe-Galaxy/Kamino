import React, { useRef, Suspense, useState } from "react";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import styles from './story.css?inline';

const StoryModel = ({ scene, scale, position, mixer }) => {
  useFrame((state, delta) => mixer.update(delta));
  scene.rotation.x = Math.PI / 3;
  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
    />
  );
};

const StoryModelLoader = ({ modelPath, modelScale }) => {
  const { scene, animations } = useGLTF(modelPath, undefined, undefined, (error) => {
    console.error("An error occurred while loading the GLTF model:", error);
  });
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

  return mixer ? <StoryModel scene={scene} scale={modelScale} position={[-1, 0, 0]} mixer={mixer} /> : null;
};

const StoryModelViewer = ({ modelPath, modelScale = 1 }) => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        style={{ width: '1200px', height: '1000px' }}
      >
        <directionalLight position={[2.5, 8, 5]} intensity={1} />
        <directionalLight position={[-2.5, -8, -5]} intensity={0.7} />
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Preload all />
          <StoryModelLoader modelPath={modelPath} modelScale={modelScale} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StoryModelViewer;
