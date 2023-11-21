import { Suspense, useRef } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useFrame, Canvas } from '@react-three/fiber';
import CanvasLoader from './Loader';
import './earth.css';
import Hand from '../../icons/Hand.svg'
import React, { useState, useEffect } from "react";



import CircleSvg from '../../icons/Ellipse 3.svg';
import IconSvg from '../../icons/mouse.svg';
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


  return (
    <div style={{ position: "relative" }}>
      {/* <TouchWorld /> */}
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
          <Stars />
          <Preload all />
        </Suspense>
      </Canvas>

      <div className="svg-click">
        {windowWidth > 920 ? (
          <>
            <div className="circleMouse">
              <img
                className="circle"
                src={CircleSvg}
                alt="circle"
              />
              <div className="mouse">
                <img
                  src={IconSvg}
                  alt="icon"

                />
              </div>
              <div className="text">
                <p>Click in </p>
                <p>the world</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="circleMouse">
                <img
                  className="circle"
                  src={CircleSvg}
                  alt="circle"
                />
                <div className="mouse">
                  <img
                    src={Hand}
                    alt="icon"
                    style={{ width: "100%",}}
                  />
              </div>
              <div className="text">
                <p>Click in </p>
                <p>the world</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EarthCanvas;
