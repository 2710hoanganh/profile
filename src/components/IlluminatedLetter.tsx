'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type IlluminatedLetterProps = {
  letter: string;
  color?: string;
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animationDelay?: number;
};

export default function IlluminatedLetter({
  letter,
  color = '#8D6748',
  backgroundColor = '#F6E7B3',
  size = 'md',
  className = '',
  animationDelay = 0
}: IlluminatedLetterProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  // Size mappings
  const sizeMap = {
    sm: { fontSize: '2rem', padding: '0.5rem' },
    md: { fontSize: '3rem', padding: '0.75rem' },
    lg: { fontSize: '4rem', padding: '1rem' }
  };
  
  // Get the first character only
  const initialLetter = letter.charAt(0).toUpperCase();
  
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: animationDelay }}
    >
      {/* Background decorative frame */}
      <svg 
        width={sizeMap[size].fontSize} 
        height={sizeMap[size].fontSize}
        viewBox="0 0 60 60" 
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: -1 }}
      >
        <motion.rect
          x="0"
          y="0"
          width="60"
          height="60"
          fill={backgroundColor}
          fillOpacity="0.2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: animationDelay }}
        />
        
        {/* Decorative border */}
        <motion.path
          d="M5,5 L55,5 L55,55 L5,55 Z"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: animationDelay + 0.1 }}
        />
        
        {/* Corner flourishes */}
        <motion.path
          d="M5,5 C10,10 15,5 20,5"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: animationDelay + 0.2 }}
        />
        <motion.path
          d="M55,5 C50,10 45,5 40,5"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: animationDelay + 0.3 }}
        />
        <motion.path
          d="M5,55 C10,50 15,55 20,55"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: animationDelay + 0.4 }}
        />
        <motion.path
          d="M55,55 C50,50 45,55 40,55"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: animationDelay + 0.5 }}
        />
      </svg>
      
      {/* The letter itself */}
      <motion.span
        className="block text-center font-serif"
        style={{ 
          fontSize: sizeMap[size].fontSize,
          padding: sizeMap[size].padding,
          color: color,
          fontWeight: 'bold',
          textShadow: `1px 1px 0 rgba(255, 255, 255, 0.8)`
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: animationDelay + 0.6 }}
      >
        {initialLetter}
      </motion.span>
    </motion.div>
  );
} 