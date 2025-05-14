'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type DecoratorProps = {
  type?: 'header' | 'divider' | 'corner';
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  animationDelay?: number;
};

export default function RenaissanceDecorator({ 
  type = 'header', 
  color = '#8D6748', 
  size = 'md',
  animationDelay = 0 
}: DecoratorProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  // Size mappings
  const sizeMap = {
    sm: { width: '100px', height: '30px' },
    md: { width: '150px', height: '40px' },
    lg: { width: '200px', height: '50px' }
  };
  
  // Opacity based on color
  const opacity = color === '#8D6748' ? 1 : 0.8;
  
  // Header decorator - ornate flourish for section headers
  if (type === 'header') {
    return (
      <motion.div
        className="flex items-center justify-center my-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: animationDelay }}
      >
        <svg 
          width={sizeMap[size].width} 
          height={sizeMap[size].height} 
          viewBox="0 0 200 50" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central ornament */}
          <motion.path 
            d="M100 10c-2 0-3-1-3-3 0-1 0-4 3-5-3 0-5 2-7 5 0 0-5-1-5 3 0 1 1 3 4 3 1-1 2-1 3-1-2 4-6 5-6 8 0 2 2 4 6 4v4c0 3 2 2 2 2V19c0-3 2-5 3-6v17s2 1 2-2v-4c4 0 6-2 6-4 0-3-4-4-6-8 1 0 2 0 3 1 3 0 4-2 4-3 0-4-5-3-5-3-2-3-4-5-7-5 3 1 3 4 3 5 0 2-1 3-3 3z"
            fill={color}
            fillOpacity={opacity}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: opacity, scale: 1 }}
            transition={{ duration: 1, delay: animationDelay + 0.3 }}
          />
          
          {/* Left decorative line */}
          <motion.path 
            d="M10 25h75"
            stroke={color}
            strokeWidth="1"
            strokeDasharray="2 3"
            strokeOpacity={opacity * 0.7}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: animationDelay + 0.1 }}
          />
          
          {/* Right decorative line */}
          <motion.path 
            d="M115 25h75"
            stroke={color}
            strokeWidth="1"
            strokeDasharray="2 3"
            strokeOpacity={opacity * 0.7}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: animationDelay + 0.1 }}
          />
          
          {/* Left scroll */}
          <motion.path 
            d="M85 25c-5-10-15-10-25 0s15 10 25 0z"
            fill="none"
            stroke={color}
            strokeWidth="1"
            strokeOpacity={opacity * 0.9}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: animationDelay + 0.2 }}
          />
          
          {/* Right scroll */}
          <motion.path 
            d="M115 25c5-10 15-10 25 0s-15 10-25 0z"
            fill="none"
            stroke={color}
            strokeWidth="1"
            strokeOpacity={opacity * 0.9}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: animationDelay + 0.2 }}
          />
        </svg>
      </motion.div>
    );
  }
  
  // Divider - horizontal ornate line
  if (type === 'divider') {
    return (
      <motion.div
        className="flex items-center justify-center my-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: animationDelay }}
      >
        <svg 
          width={sizeMap[size].width} 
          height="20" 
          viewBox="0 0 200 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main line */}
          <motion.path 
            d="M0 10h200"
            stroke={color}
            strokeWidth="0.5"
            strokeOpacity={opacity * 0.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: animationDelay }}
          />
          
          {/* Central ornament */}
          <motion.circle 
            cx="100" 
            cy="10" 
            r="4"
            fill={color}
            fillOpacity={opacity * 0.8}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: animationDelay + 0.2 }}
          />
          
          {/* Left ornaments */}
          <motion.circle 
            cx="70" 
            cy="10" 
            r="2"
            fill={color}
            fillOpacity={opacity * 0.6}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: animationDelay + 0.3 }}
          />
          <motion.circle 
            cx="40" 
            cy="10" 
            r="2"
            fill={color}
            fillOpacity={opacity * 0.6}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: animationDelay + 0.4 }}
          />
          
          {/* Right ornaments */}
          <motion.circle 
            cx="130" 
            cy="10" 
            r="2"
            fill={color}
            fillOpacity={opacity * 0.6}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: animationDelay + 0.3 }}
          />
          <motion.circle 
            cx="160" 
            cy="10" 
            r="2"
            fill={color}
            fillOpacity={opacity * 0.6}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: animationDelay + 0.4 }}
          />
        </svg>
      </motion.div>
    );
  }
  
  // Corner decorator - for page corners or frames
  if (type === 'corner') {
    return (
      <motion.div
        className="absolute top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: animationDelay }}
      >
        <svg 
          width="50" 
          height="50" 
          viewBox="0 0 50 50" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path 
            d="M5 5C15 5 45 5 45 45M5 15C15 15 35 15 35 45M5 25C15 25 25 25 25 45"
            stroke={color}
            strokeWidth="0.5"
            strokeOpacity={opacity * 0.6}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: animationDelay }}
          />
          <motion.circle 
            cx="5" 
            cy="5" 
            r="2"
            fill={color}
            fillOpacity={opacity * 0.8}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: animationDelay + 0.2 }}
          />
        </svg>
      </motion.div>
    );
  }
  
  return null;
} 