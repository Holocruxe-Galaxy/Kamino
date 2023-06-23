import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Landing.module.css";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Waitlist from "../../components/Waitlist/waitlist";
import EarthCanvas from "../../components/models/Earth";
import Container from "../../components/Waitlist/waitlistcontainer";
import { Canvas } from "@react-three/fiber";
import Stars from "../../components/Stars/stars";

const Landing = () => {
  const svgDiv = useRef();
  const { scrollYProgress } = useScroll({
    target: svgDiv,
    offset: ["start end", "end start"],
  });
  const length = useTransform(scrollYProgress, [0.07, 0.86], [0, 1]);
  const length2 = useTransform(scrollYProgress, [0.35, 1.175], [0, 1]);
  const length3 = useTransform(scrollYProgress, [0.65, 0.825], [0, 1]);

  const hasVisited = sessionStorage.getItem("visited");

  useEffect(() => {
    console.log(hasVisited);
    if (!hasVisited) {
      sessionStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <main
      className={`${styles.container} ${
        !hasVisited && location.pathname === "/" && styles.containerAnim
      }`}
    >
      <Canvas style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex:'-1'
      }}>
        <Stars />
      </Canvas>
      <EarthCanvas />
      <Hero></Hero>
      <div ref={svgDiv} className={styles.featuresContainer}>
        <Feature
          verb="Live"
          phrase="Embrace the adventure of life"
          paragraph="Create unforgettable moments that will leave an indelible mark on the canvas of your future. Let laughter and joy permeate your days, as you craft a collection of incredible memories that will ignite your heart whenever you reflect upon them."
          modelPath="./rocket/scene.gltf"
          modelType='rocket'
        />
        <Feature
          verb="Story"
          phrase="Tell your story"
          paragraph="Craft a narrative that captures the essence of your experiences."
          modelPath="./book/scene.gltf"
          modelType="story"
        />

        <Feature
          verb="Legacy"
          phrase="Build your legacy"
          paragraph="Create something that will have a lasting impact."
          modelPath="./holocruxe/holocruxelogov2.gltf"
          modelType="legacy"
        />
        <motion.svg
          width="105"
          height="999"
          viewBox="0 0 105 999"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svgIndex}
        >
          <circle cx="50" cy="4" r="4" fill="#59C1BD" />
          <motion.path
            d="M29.2976 7.65277C19.9541 12.6869 12.5251 20.7526 8.18648 30.5734C3.84791 40.3941 2.84761 51.4089 5.34392 61.8741C7.84022 72.3394 13.6905 81.6573 21.9688 88.3531C30.2471 95.0489 40.4805 98.7401 51.0493 98.8423M51.0493 98.8423C61.618 98.9445 71.9182 95.4519 80.3198 88.9174C88.7213 82.383 94.7441 73.1798 97.4348 62.7647C100.126 52.3496 99.3307 41.3175 95.1758 31.4146C91.0209 21.5118 83.7435 13.3038 74.4954 8.08988M51.0493 98.8423V451.8"
            stroke="url(#paint0_linear_48_15)"
            strokeWidth="1"
            strokeLinecap="round"
            pathLength={length}
          />
          <circle cx="51" cy="452" r="4" fill="#59C1BD" />
          <motion.path
            d="M30.2976 455.653C20.9541 460.687 13.5251 468.753 9.18648 478.573C4.84791 488.394 3.84761 499.409 6.34392 509.874C8.84022 520.339 14.6905 529.657 22.9688 536.353C31.2471 543.049 41.4805 546.74 52.0493 546.842M52.0493 546.842C62.618 546.944 72.9182 543.452 81.3198 536.917C89.7213 530.383 95.7441 521.18 98.4348 510.765C101.126 500.35 100.331 489.318 96.1758 479.415C92.0209 469.512 84.7435 461.304 75.4954 456.09M52.0493 546.842V899.8"
            stroke="url(#paint1_linear_48_15)"
            strokeWidth="1"
            strokeLinecap="round"
            pathLength={length2}
          />
          <circle cx="52" cy="900" r="4" fill="#59C1BD" />
          <motion.path
            d="M31.2976 903.653C21.9541 908.687 14.5251 916.753 10.1865 926.573C5.84791 936.394 4.84761 947.409 7.34392 957.874C9.84022 968.339 15.6905 977.657 23.9688 984.353C32.2471 991.049 42.4805 994.74 53.0493 994.842C63.618 994.944 73.9182 991.452 82.3198 984.917C90.7213 978.383 96.7441 969.18 99.4348 958.765C102.126 948.35 101.331 937.318 97.1758 927.415C93.0209 917.512 85.7435 909.304 76.4954 904.09"
            stroke="url(#paint2_linear_48_15)"
            strokeWidth="1"
            strokeLinecap="round"
            pathLength={length3}
          />
          <defs>
            <linearGradient
              id="paint0_linear_48_15"
              x1="51.5"
              y1="7.65277"
              x2="51.5"
              y2="451.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.479622" stopColor="#F7F9F9" />
              <stop offset="1" stopColor="#59C1BD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_48_15"
              x1="52.5"
              y1="455.653"
              x2="52.5"
              y2="899.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.479622" stopColor="#F7F9F9" />
              <stop offset="1" stopColor="#59C1BD" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_48_15"
              x1="53.5"
              y1="903.653"
              x2="53.5"
              y2="1347.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.479622" stopColor="#F7F9F9" />
              <stop offset="1" stopColor="#59C1BD" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
      <Container/>
    </main>
  );
};

export default Landing;
