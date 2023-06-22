import React, { Suspense, useRef, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import styles from './story.css?inline';
import * as THREE from "three";

const StoryModel = () => {
  const groupRef = useRef();
  const { scene, animations } = useGLTF("./book/scene2.gltf");
  const [mixer] = useState(new THREE.AnimationMixer(scene));

  animations.forEach((clip) => mixer.clipAction(clip).play());

  useFrame((state, delta) => mixer.update(delta));
  scene.rotation.x = Math.PI / 3;

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2.5, 8, 5]} intensity={1} />
      <primitive
        object={scene}
        scale={0.60}
        position={[-0.5, 0.15, 0]}
      />
    </group>
  );
};

const StoryModelViewer = () => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas style={{ width: '1200px', height: '800px', left: '-200px', top: '20px' }}>
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Preload all />
          <StoryModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StoryModelViewer;
