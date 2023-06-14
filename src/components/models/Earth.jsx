import React, { Suspense, useRef } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import CanvasLoader from "./Loader";
import { Canvas } from "@react-three/fiber";
import './earth.css'
import Stars from "../Stars/stars";

const Earth = () => {
  const earthRef = useRef();
  const earth = useGLTF("./planet/scene.gltf");

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
    <Canvas className="earth-canvas" style={{height: '500px'}}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
      <Stars/>
      <Preload all />
    </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
