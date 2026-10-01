import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./AnimationBg.module.css";

const AnimationBg = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const windowHalfRef = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;

    const aspect = window.innerWidth / window.innerHeight;
    const fov = 40;
    const plane = 1;
    const far = 800;
    const camera = new THREE.PerspectiveCamera(fov, aspect, plane, far);
    camera.position.z = far / 2;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1b1b1b, 0.0001);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);
    container.appendChild(renderer.domElement);

    const amount = 45000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(amount * 3);

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = Math.random() * 2000 - 1000;
      positions[i + 1] = Math.random() * 2000 - 1000;
      positions[i + 2] = Math.random() * 2000 - 1000;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const materialOptions = {
      color: new THREE.Color(0xffffff),
      size: 1.1,
      transparent: true,
      opacity: 0.8,
    };

    const starStuff = new THREE.PointsMaterial(materialOptions);
    const stars = new THREE.Points(geometry, starStuff);
    scene.add(stars);

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX - windowHalfRef.current.x;
      mouseRef.current.y = e.clientY - windowHalfRef.current.y;
    };

    const onWindowResize = () => {
      windowHalfRef.current.x = window.innerWidth / 2;
      windowHalfRef.current.y = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      camera.position.x += (mouseRef.current.x - camera.position.x) * 0.005;
      camera.position.y += (-mouseRef.current.y - camera.position.y) * 0.005;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    animate();

    document.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("resize", onWindowResize, false);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("mousemove", onMouseMove, false);
      window.removeEventListener("resize", onWindowResize, false);

      geometry.dispose();
      starStuff.dispose();
      renderer.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={styles.animation} />;
};

export default AnimationBg;
