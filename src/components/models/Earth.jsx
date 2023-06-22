import React, { Suspense, useRef } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import CanvasLoader from "./Loader";
import { Canvas } from "@react-three/fiber";
import "./earth.css";
import Stars from "../Stars/stars";
import CircleSvg from '../../icons/Ellipse 3.svg'
import IconSvg from '../../icons/mouse.svg'

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
    <div style={{ position: 'relative' }}> {/* Set relative positioning on the parent div */}
    <Canvas className="earth-canvas" style={{ height: "1000px" }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Stars />
        <Preload all />
      </Suspense>
    </Canvas>
    <img src={CircleSvg} alt="circle" style={{ position: 'absolute', bottom: '350px', right: '300px' }} />
    <img src={IconSvg} alt="icon" style={{ position: 'absolute', bottom: '370px', right: '315px' }} />
    <div style={{ position: 'absolute', bottom: '300px', right: '290px', userSelect: 'none', color: 'white' }}>
        <p>Click in</p>
        <p>the world</p>
      </div>
    </div>
  );
};

export default EarthCanvas;
