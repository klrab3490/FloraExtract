import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FloraExtractsAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1], // Scale animation
      rotate: [0, 360, 0], // Rotation animation
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="text"
      animate={controls}
      style={{
        fontSize: '36px',
        color: '#3498db',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textAlign: 'center',
      }}
    >
      Flora Extracts
    </motion.div>
  );
};

export default FloraExtractsAnimation;
