'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type RenaissanceCaptionProps = {
  text: string;
  className?: string;
  animationDelay?: number;
};

export default function RenaissanceCaption({
  text,
  className = '',
  animationDelay = 0
}: RenaissanceCaptionProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={`text-center py-2 italic text-[#8D6748] text-sm ${className}`}>
        {text}
      </div>
    );
  }

  return (
    <motion.div
      className={`relative text-center py-2 italic text-[#8D6748] text-sm ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: animationDelay }}
    >
      {/* Decorative line before */}
      <div className="absolute left-0 top-1/2 w-[15%] h-[1px] bg-gradient-to-r from-transparent to-[rgba(139,103,72,0.3)]"></div>
      
      {/* Decorative line after */}
      <div className="absolute right-0 top-1/2 w-[15%] h-[1px] bg-gradient-to-l from-transparent to-[rgba(139,103,72,0.3)]"></div>
      
      {/* Text */}
      <span className="relative px-3 font-serif">
        {text}
      </span>
    </motion.div>
  );
} 