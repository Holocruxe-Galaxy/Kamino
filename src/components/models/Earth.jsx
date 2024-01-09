import { Suspense, useRef } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useFrame, Canvas } from '@react-three/fiber';
import CanvasLoader from './Loader';
import './earth.css';

import React, { useState, useEffect } from "react";
import Hand from "../../icons/Hand.svg";
import { useTranslation } from "react-i18next";


import Mouse from '../../icons/mouse.svg';
import Stars from '../Stars/stars';

const Earth = () => {
  const earthRef = useRef();
  const earth = useGLTF('./planet/scene.gltf');

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.007; // velocidad de rotacion
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={earth.scene}
      scale={2.9}
      position={[0, 0.5, 0]} //la posicion!
    />
  );
};

const EarthCanvas = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { t} = useTranslation();

  return (
    <div style={{ position: "relative" }}>
      <Canvas
        className="earth-canvas"
        style={{ height: "800px", marginTop: "5rem" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          {/* <Stars /> */}
          <Preload all />
        </Suspense>
      </Canvas>

      <div className="svg-click">
        {windowWidth > 920 ? (
          <>
            <div className="iconText">
              <div className="mouse">
                <img src={Mouse} alt="icon" />
              </div>
              <div className="text">
                <p>{t("earth.click")}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="iconText">
              <div className="mouse">
                <img src={Hand} alt="icon" style={{ width: "100%" }} />
              </div>
              <div className="text"><p>{t("earth.touch")}</p></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EarthCanvas;
