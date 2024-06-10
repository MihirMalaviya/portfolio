"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const style = {
    // transform: 'translate(-50%, -50%)',
    // width: '400px',
    // height: '400px',
    // borderRadius: '50%',
    // filter: 'blur(100px)',
    // backgroundColor: 'rgb(255, 67, 75)',
    // background: 'linear-gradient(#43d9ad, #4d5bce)',
    // opacity: 0.4,
    // zIndex: -1,
    // position: 'fixed',
    // pointerEvents: 'none',
  };

  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
    },
  };

  return (
    <motion.div
      style={style}
      variants={variants}
      animate="default"
      className='fixed bg-gradient-to-br from-teal-500/[.75] via-primary-400/[.75] to-purple-500/[.75] w-[400px] h-[400px] rounded-full blur-[200px] -translate-x-50 -translate-y-50 -z-10 pointer-events-none lg:visible invisible'
      
      transition={{
        x: {
          duration: 0,
        },
        y: {
          duration: 0,
        },
      }}
    >
    </motion.div>
  );
};

export default CustomCursor;