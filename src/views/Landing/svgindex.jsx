import React from 'react';
import { motion, useTransform } from 'framer-motion';

const SVGIndex = ({ scrollYProgress }) => {
  const length = useTransform(scrollYProgress, [0.07, 0.86], [0, 1]);
  const length2 = useTransform(scrollYProgress, [0.35, 1.175], [0, 1]);
  const length3 = useTransform(scrollYProgress, [0.65, 0.825], [0, 1]);

  return (
    <motion.svg
      width="105"
      height="999"
      viewBox="0 0 105 999"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >      
    </motion.svg>
  );
};

export default SVGIndex;
