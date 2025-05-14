'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type RenaissanceFrameProps = {
  src: string;
  alt: string;
  className?: string;
  animationDelay?: number;
  aspectRatio?: string;
  objectPosition?: string;
};

export default function RenaissanceFrame({
  src,
  alt,
  className = '',
  animationDelay = 0,
  aspectRatio = '4/3',
  objectPosition = 'center'
}: RenaissanceFrameProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Common style for consistent height while maintaining aspect ratio
  const frameStyle = {
    height: '320px',
    aspectRatio: 'auto',
    width: '100%'
  };

  if (!isMounted) {
    return (
      <div 
        className={`relative overflow-hidden ${className}`} 
        style={frameStyle}
      >
        <div className="absolute inset-0 border-[12px] border-[#F5E9DA] rounded-sm"></div>
        <div className="absolute inset-[12px] border-[3px] border-[rgba(139,103,72,0.2)] rounded-sm"></div>
        <div className="absolute inset-[15px] overflow-hidden">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover"
            style={{ objectPosition }}
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={frameStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer decorative frame */}
      <motion.div 
        className="absolute inset-0 border-[12px] border-[#F5E9DA] rounded-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: animationDelay + 0.2 }}
      />
      
      {/* Inner decorative frame */}
      <motion.div 
        className={`absolute inset-[12px] border-[3px] rounded-sm transition-all duration-500 ${isHovered ? 'border-[rgba(139,103,72,0.4)]' : 'border-[rgba(139,103,72,0.2)]'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: animationDelay + 0.3 }}
      />
      
      {/* Corner ornaments */}
      <div className="absolute top-[6px] left-[6px] w-8 h-8 pointer-events-none">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2C6 2 30 2 30 30" stroke="#8D6748" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="2" cy="2" r="2" fill="#8D6748" fillOpacity="0.2" />
        </svg>
      </div>
      
      <div className="absolute top-[6px] right-[6px] w-8 h-8 pointer-events-none" style={{ transform: 'scaleX(-1)' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2C6 2 30 2 30 30" stroke="#8D6748" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="2" cy="2" r="2" fill="#8D6748" fillOpacity="0.2" />
        </svg>
      </div>
      
      <div className="absolute bottom-[6px] left-[6px] w-8 h-8 pointer-events-none" style={{ transform: 'scaleY(-1)' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2C6 2 30 2 30 30" stroke="#8D6748" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="2" cy="2" r="2" fill="#8D6748" fillOpacity="0.2" />
        </svg>
      </div>
      
      <div className="absolute bottom-[6px] right-[6px] w-8 h-8 pointer-events-none" style={{ transform: 'scale(-1)' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2C6 2 30 2 30 30" stroke="#8D6748" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="2" cy="2" r="2" fill="#8D6748" fillOpacity="0.2" />
        </svg>
      </div>
      
      {/* Image */}
      <motion.div
        className="absolute inset-[15px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: animationDelay + 0.1 }}
      >
        <div className={`absolute inset-0 z-10 pointer-events-none mix-blend-overlay transition-opacity duration-500 ${isHovered ? 'opacity-15' : 'opacity-10'} bg-[#F6E7B3]`}></div>
        <div className={`absolute inset-0 z-10 pointer-events-none mix-blend-multiply transition-opacity duration-500 ${isHovered ? 'opacity-15' : 'opacity-10'} bg-gradient-to-br from-[#8D6748] to-transparent`}></div>
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ 
            filter: 'sepia(10%) contrast(105%)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            objectPosition
          }}
        />
      </motion.div>
      
      {/* Hover overlay */}
      {isHovered && (
        <div className="absolute inset-[15px] z-20 pointer-events-none bg-gradient-to-t from-[rgba(139,103,72,0.2)] to-transparent opacity-60"></div>
      )}
    </motion.div>
  );
} 