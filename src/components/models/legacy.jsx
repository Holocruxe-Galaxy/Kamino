import React, { Suspense, useRef } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import CanvasLoader from "./Loader"; 
import { Canvas } from "@react-three/fiber";

const LegacyModel = () => {
  const modelRef = useRef();
  const model = useGLTF("./legacy/scene.gltf"); 

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003; 
    }
  });

  return (
    <group>

    <ambientLight intensity={0.5} />
    <directionalLight position={[2.5, 8, 5]} intensity={1} />
    <primitive
      ref={modelRef}
      object={model.scene}
      scale={0.6} 
      position={[0, -3.78, 0]} 
      />
      </group>
  );
};

const LegacyModelCanvas = () => {
  return (
    <Canvas className="legacy-model-canvas" style={{ height: '500px' }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <LegacyModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default LegacyModelCanvas;
