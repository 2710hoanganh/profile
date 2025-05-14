'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type RenaissanceScrollProps = {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
};

export default function RenaissanceScroll({
  children,
  className = '',
  animationDelay = 0
}: RenaissanceScrollProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={`scroll-paper p-6 shadow-sm ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`scroll-paper p-6 shadow-sm relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: animationDelay }}
    >
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none opacity-10">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2C12 2 62 2 62 62" stroke="#8D6748" strokeWidth="2" strokeDasharray="2 3" />
          <path d="M2 12C12 12 52 12 52 62" stroke="#8D6748" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="2" cy="2" r="2" fill="#8D6748" />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-10" style={{ transform: 'scaleX(-1)' }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2C12 2 62 2 62 62" stroke="#8D6748" strokeWidth="2" strokeDasharray="2 3" />
          <path d="M2 12C12 12 52 12 52 62" stroke="#8D6748" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="2" cy="2" r="2" fill="#8D6748" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none opacity-10" style={{ transform: 'scaleY(-1)' }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2C12 2 62 2 62 62" stroke="#8D6748" strokeWidth="2" strokeDasharray="2 3" />
          <path d="M2 12C12 12 52 12 52 62" stroke="#8D6748" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="2" cy="2" r="2" fill="#8D6748" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none opacity-10" style={{ transform: 'scale(-1)' }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2C12 2 62 2 62 62" stroke="#8D6748" strokeWidth="2" strokeDasharray="2 3" />
          <path d="M2 12C12 12 52 12 52 62" stroke="#8D6748" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="2" cy="2" r="2" fill="#8D6748" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
} 