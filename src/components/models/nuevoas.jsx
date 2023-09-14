import React, { Suspense, useRef, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import styles from './story.css?inline';
import * as THREE from "three";
import CanvasLoader from "./Loader";

const AndyModel = () => {
  const groupRef = useRef();
  const { scene, animations } = useGLTF("/astronaut/astronautSit.gltf"); 
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
        scale={1.5}
        position={[0, -1.5, 0]}
        rotation={[0.3,3.1,0]}
      />
    </group>
  );
};

const Astro = ({ onClick }) => {
    return (
      <div className={styles.canvasContainer} onClick={onClick}>
        <Canvas style={{ height: '500px',  top: '80px' }}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              enablePan={true}
              enableRotate={true}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Preload all />
            <AndyModel />
          </Suspense>
        </Canvas>
      </div>
    );
  };
  

export default Astro;
