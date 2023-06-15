import React, { useRef } from 'react';
import styles from './Landing.module.css';
import Hero from '../../components/Hero/Hero';
import Feature from '../../components/Feature/Feature';
import { motion, useScroll, useTransform } from 'framer-motion';

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
    <main className={styles.container} ref={svgDiv}>
      <Hero></Hero>

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

      {/* <motion.svg
        // width="135"
        // height="788"
        viewBox="0 0 135 788"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgIndex}
      >
        <motion.path
          d="M93.0018 11.5331C99.7235 15.4427 104.967 21.4617 107.918 28.656C110.869 35.8502 111.363 43.8174 109.323 51.3211C107.283 58.8247 102.823 65.4452 96.6357 70.155C90.4482 74.8648 82.8792 77.4005 75.1033 77.3686M75.1033 77.3686C67.3273 77.3368 59.7793 74.7391 53.6307 69.9787C47.4821 65.2183 43.0767 58.5616 41.0983 51.0414C39.1199 43.5213 39.6791 35.5584 42.689 28.3886C45.699 21.2188 50.9915 15.243 57.745 11.3886M75.1033 77.3686L75.1033 243.5"
          stroke="url(#paint0_linear_14_44)"
          strokeWidth="7.5"
          strokeLinecap="round"
          pathLength={length}
        />
        <circle cx="75.1204" cy="9.53368" r="3.75" fill="#59C1BD" />
        <motion.path
          d="M92.2327 245.533C98.9545 249.443 104.198 255.462 107.149 262.656C110.1 269.85 110.594 277.817 108.554 285.321C106.514 292.825 102.054 299.445 95.8666 304.155C89.6792 308.865 82.1102 311.4 74.3342 311.369M74.3342 311.369C66.5583 311.337 59.0103 308.739 52.8617 303.979C46.7131 299.218 42.3077 292.562 40.3293 285.041C38.3508 277.521 38.91 269.558 41.92 262.389C44.93 255.219 50.2224 249.243 56.976 245.389M74.3342 311.369L74.3342 477.5"
          stroke="url(#paint1_linear_14_44)"
          strokeWidth="7.5"
          strokeLinecap="round"
          pathLength={length2}
        />
        <circle cx="74.3514" cy="243.534" r="3.75" fill="#59C1BD" />
        <motion.path
          d="M92.2327 479.533C98.9545 483.443 104.198 489.462 107.149 496.656C110.1 503.85 110.594 511.817 108.554 519.321C106.514 526.825 102.054 533.445 95.8666 538.155C89.6792 542.865 82.1102 545.4 74.3342 545.369M74.3342 545.369C66.5583 545.337 59.0103 542.739 52.8617 537.979C46.7131 533.218 42.3077 526.562 40.3293 519.041C38.3508 511.521 38.91 503.558 41.92 496.389C44.93 489.219 50.2224 483.243 56.976 479.389M74.3342 545.369L74.3342 711.5"
          stroke="url(#paint2_linear_14_44)"
          strokeWidth="7.5"
          strokeLinecap="round"
          pathLength={length3}
        />
        <circle cx="74.3514" cy="477.534" r="3.75" fill="#59C1BD" />
        <motion.path
          d="M93.0017 713.533C99.7234 717.443 104.967 723.462 107.918 730.656C110.869 737.85 111.363 745.817 109.323 753.321C107.283 760.825 102.823 767.445 96.6356 772.155C90.4481 776.865 82.8791 779.4 75.1032 779.369C67.3272 779.337 59.7792 776.739 53.6306 771.979C47.482 767.218 43.0766 760.562 41.0982 753.041C39.1198 745.521 39.679 737.558 42.6889 730.389C45.6989 723.219 50.9914 717.243 57.7449 713.389"
          stroke="#F7F9F9"
          strokeWidth="7.5"
          strokeLinecap="round"
          pathLength={length4}
        />
        <circle cx="75.1202" cy="711.534" r="3.75" fill="#59C1BD" />
        <defs>
          <linearGradient
            id="paint0_linear_14_44"
            x1="75"
            y1="243"
            x2="75"
            y2="143.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#59C1BD" />
            <stop offset="1" stopColor="#F7F9F9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_14_44"
            x1="74.231"
            y1="477"
            x2="74.231"
            y2="377.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#59C1BD" />
            <stop offset="1" stopColor="#F7F9F9" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_14_44"
            x1="74.231"
            y1="711"
            x2="74.231"
            y2="611.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#59C1BD" />
            <stop offset="1" stopColor="#F7F9F9" />
          </linearGradient>
        </defs>
      </motion.svg> */}

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
    </main>
  );
};

export default Landing;
