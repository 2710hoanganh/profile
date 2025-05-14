"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TextureOverlay() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing during SSR to avoid hydration mismatch
  }

  return (
    <>
      {/* Main noise texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] mix-blend-overlay"
        style={{ 
          backgroundImage: "url('/noise.svg')",
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />
      
      {/* Grain overlay - subtle texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.02]"
        style={{
          backgroundImage: "url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 600 600%22 xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221%22 numOctaves=%222%22 stitchTiles=%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22%2F%3E%3C%2Fsvg%3E')",
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
      />
      
      {/* Top gradient overlay */}
      <motion.div 
        className="fixed inset-x-0 top-0 h-[150px] pointer-events-none z-[1] opacity-30"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(164, 117, 81, 0.05), transparent)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
        aria-hidden="true"
      />
      
      {/* Bottom vignette effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-30"
        style={{ 
          background: 'radial-gradient(circle at center, transparent 65%, rgba(107, 79, 58, 0.06) 100%)',
        }}
        aria-hidden="true"
      />
    </>
  );
} 