import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Landing.module.css';
import Hero from '../../components/Hero/Hero';
import Feature from '../../components/Feature/Feature';
import Waitlist from '../../components/Waitlist/waitlist';
import EarthCanvas from '../../components/models/Earth';

const Landing = () => {
  const svgDiv = useRef();
  const { scrollYProgress } = useScroll({
    target: svgDiv,
    offset: ['start end', 'end end'],
  });
  const length = useTransform(scrollYProgress, [0, 0.8], [0.075, 1]);
  const length2 = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const length3 = useTransform(scrollYProgress, [0.55, 1.3], [0, 1]);
  const length4 = useTransform(scrollYProgress, [0.65, 0.95], [0, 1]);
  return (
    <main className={styles.container}>
      <Hero></Hero>

<<<<<<< HEAD
      <Feature
  verb="Live"
  phrase="Embrace the adventure of life"
  paragraph="Create unforgettable moments that will leave an indelible mark on the canvas of your future. Let laughter and joy permeate your days, as you craft a collection of incredible memories that will ignite your heart whenever you reflect upon them."
  modelPath="./live/scene.gltf"
/>
<Feature
  verb="Story"
  phrase="Tell your story"
  paragraph="Craft a narrative that captures the essence of your experiences."
  modelPath="./story/scene.gltf"
  modelType="story" // Pass the model type as a prop
/>


<Feature
  verb="Legacy"
  phrase="Build your legacy"
  paragraph="Create something that will have a lasting impact."
  modelPath="./legacy/scene.gltf"
  modelType="legacy" 
/>
=======
      <div ref={svgDiv}>
        <Feature
          verb="Live"
          phrase="Embrace the adventure of life"
          paragraph="Create unforgettable moments that will leave an indelible mark on the canvas of your future. Let laughter and joy permeate your days, as you craft a collection of incredible memories that will ignite your heart whenever you reflect upon them."
          img="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjg3NGQwM2Y4YmRhYjI0ZjJjNjMwYTIwYmE2NWNhZTg2YjY0ZTc2NiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/4T1FGdX8Klmfp4aSbW/giphy.gif"
          src="The adventure of life"
        />
        <Feature
          verb="Experiment"
          phrase="Embrace the adventure of life"
          paragraph="Customize your digital experience by granting permissions, adjusting privacy preferences, and shaping the platform to suit your unique needs and desires."
          img="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjg3NGQwM2Y4YmRhYjI0ZjJjNjMwYTIwYmE2NWNhZTg2YjY0ZTc2NiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/4T1FGdX8Klmfp4aSbW/giphy.gif"
          src="The adventure of life"
        />
        <Feature
          verb="Configure"
          phrase="Take control of your privacy and set the stage"
          paragraph="Create unforgettable moments that will leave an indelible mark on the canvas of your future. Let laughter and joy permeate your days, as you craft a collection of incredible memories that will ignite your heart whenever you reflect upon them."
          img="/product.png"
          src="The adventure of life"
        />
>>>>>>> 149dfc9068ed4537c2a2c01ad3d3434695005975

        <motion.svg
          viewBox="0 0 80 1066"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svgIndex}
        >
          <circle cx="40" cy="4" r="4" fill="#59C1BD" />
          <motion.path
            d="M23.1729 4.17896C16.0915 7.92291 10.4611 13.9216 7.17291 21.2255C3.88473 28.5293 3.12661 36.7212 5.01855 44.5044C6.91048 52.2877 11.3444 59.2176 17.6185 64.1974C23.8926 69.1772 31.6484 71.9224 39.6584 71.9984M39.6584 71.9984C47.6683 72.0744 55.4749 69.4769 61.8423 64.6171C68.2098 59.7573 72.7744 52.9127 74.8138 45.1668C76.8531 37.4209 76.2506 29.2161 73.1016 21.8511C69.9527 14.4862 64.4372 8.38172 57.4281 4.50404M39.6584 71.9984V334.5"
            stroke="url(#paint0_linear_32_61)"
            strokeWidth="8"
            strokeLinecap="round"
            pathLength={length}
          />
          <circle cx="40" cy="334" r="4" fill="#59C1BD" />
          <motion.path
            d="M23.1729 334.179C16.0915 337.923 10.4611 343.922 7.17291 351.225C3.88473 358.529 3.12661 366.721 5.01855 374.504C6.91048 382.288 11.3444 389.218 17.6185 394.197C23.8926 399.177 31.6484 401.922 39.6584 401.998M39.6584 401.998C47.6683 402.074 55.4749 399.477 61.8423 394.617C68.2098 389.757 72.7744 382.913 74.8138 375.167C76.8531 367.421 76.2506 359.216 73.1016 351.851C69.9527 344.486 64.4372 338.382 57.4281 334.504M39.6584 401.998V664.5"
            stroke="url(#paint1_linear_32_61)"
            strokeWidth="8"
            strokeLinecap="round"
            pathLength={length2}
          />
          <circle cx="40" cy="664" r="4" fill="#59C1BD" />
          <motion.path
            d="M23.1729 664.179C16.0915 667.923 10.4611 673.922 7.17291 681.225C3.88473 688.529 3.12661 696.721 5.01855 704.504C6.91048 712.288 11.3444 719.218 17.6185 724.197C23.8926 729.177 31.6484 731.922 39.6584 731.998M39.6584 731.998C47.6683 732.074 55.4749 729.477 61.8423 724.617C68.2098 719.757 72.7744 712.913 74.8138 705.167C76.8531 697.421 76.2506 689.216 73.1016 681.851C69.9527 674.486 64.4372 668.382 57.4281 664.504M39.6584 731.998V994.5"
            stroke="url(#paint2_linear_32_61)"
            strokeWidth="8"
            strokeLinecap="round"
            pathLength={length3}
          />
          <circle cx="40" cy="994" r="4" fill="#59C1BD" />
          <motion.path
            d="M23.1729 994.179C16.0915 997.923 10.4611 1003.92 7.17291 1011.23C3.88473 1018.53 3.12661 1026.72 5.01855 1034.5C6.91048 1042.29 11.3444 1049.22 17.6185 1054.2C23.8926 1059.18 31.6484 1061.92 39.6584 1062C47.6683 1062.07 55.4749 1059.48 61.8423 1054.62C68.2098 1049.76 72.7744 1042.91 74.8138 1035.17C76.8531 1027.42 76.2506 1019.22 73.1016 1011.85C69.9527 1004.49 64.4372 998.382 57.4281 994.504"
            stroke="url(#paint3_linear_32_61)"
            strokeWidth="8"
            strokeLinecap="round"
            pathLength={length4}
          />
          <defs>
            <linearGradient
              id="paint0_linear_32_61"
              x1="40"
              y1="4.17896"
              x2="40"
              y2="334.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.479622" stopColor="#F7F9F9" />
              <stop offset="1" stopColor="#59C1BD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_32_61"
              x1="40"
              y1="334.179"
              x2="40"
              y2="664.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.479622" stopColor="#F7F9F9" />
              <stop offset="1" stopColor="#59C1BD" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_32_61"
              x1="40"
              y1="664.179"
              x2="40"
              y2="994.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.479622" stopColor="#F7F9F9" />
              <stop offset="1" stopColor="#59C1BD" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_32_61"
              x1="40"
              y1="994.179"
              x2="40"
              y2="1324.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.479622" stopColor="#F7F9F9" />
              <stop offset="0.941162" stopColor="#1C3C54" />
              <stop offset="1" stopColor="#59C1BD" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
      <Waitlist />
      <EarthCanvas />
    </main>
  );
};

export default Landing;
