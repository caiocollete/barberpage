'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export const ScrollAnimation = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={
        isInView
          ? { x: 0, y: 0, opacity: 1 }
          : directionVariants[direction]
      }
      transition={{
        duration: 0.8,
        delay: delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 