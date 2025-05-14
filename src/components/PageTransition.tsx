"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PageTransition() {
  const [loading, setLoading] = useState(true);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);

  useEffect(() => {
    // Simulate page loading with a more natural timing
    const timer = setTimeout(() => {
      setLogoAnimationComplete(true);
      
      // Slight delay before removing the transition screen
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  // Logo animation variants
  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1], // Custom spring-like effect
      }
    },
    exit: { 
      scale: 0.9, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#FDF6ED] ${loading ? '' : 'transform translate-y-full transition-transform duration-700 ease-in-out'}`}
    >
      {loading && (
        <div className="relative">
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={() => setLogoAnimationComplete(true)}
            className="text-[#8D6748] text-5xl font-bold relative"
          >
            CMH
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-[#A47551]"
              initial={{ width: 0 }}
              animate={{ 
                width: logoAnimationComplete ? '100%' : 0 
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
} 