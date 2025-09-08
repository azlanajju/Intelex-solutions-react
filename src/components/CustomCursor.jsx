import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '@/hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const element = e.target;
      if (
        window.getComputedStyle(element).getPropertyValue('cursor') === 'pointer'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: x - 16,
      y: y - 16,
      height: 50,
      width: 50,
      backgroundColor: 'rgba(20, 184, 166, 0)',
      backdropFilter: 'blur(1.5px)',
      border: '2px solid rgba(200, 200, 200, 200)',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 400,
        damping: 15,
      },
    },
    pointer: {
      x: x - 24,
      y: y - 24,
      height: 70,
      width: 70,
      backgroundColor: 'rgba(20, 184, 166, 0.1)',
      backdropFilter: 'blur(1px)',
      border: '2px solid rgba(200, 200, 200, 200)',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 400,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={isPointer ? 'pointer' : 'default'}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
    />
  );
};

export default CustomCursor;