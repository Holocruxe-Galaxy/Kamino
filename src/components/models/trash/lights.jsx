import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Lights = () => {
  const numStars = 200;
  const positions = useMemo(() => {
    let positions = [];
    for (let i = 0; i < numStars; i++) {
      positions.push((Math.random() - 0.5) * 200); // x
positions.push((Math.random() - 0.5) * 200); // y
positions.push((Math.random() - 0.5) * 200 + 100)
    }
    return new Float32Array(positions);
  }, [numStars]);

  const light = useRef();

  useFrame(({ clock }) => {
    if (light.current && light.current.geometry.attributes.position) {
      const positionsArray = light.current.geometry.attributes.position.array;
      for (let i = 0; i < numStars; i++) {
        positionsArray[i * 3 + 1] = 50 * Math.sin(clock.elapsedTime + i * 0.1);
      }
      light.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={light}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" size={3} color="white" />
    </points>
  );
};

export default Lights;
