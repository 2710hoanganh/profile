'use client'

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Renaissance motif SVGs
const renaissanceMotifs = [
  // Fleur-de-lis
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
    <path fill="rgba(139, 103, 72, 0.15)" d="M25 10c-2 0-3-1-3-3 0-1 0-4 3-5-3 0-5 2-7 5 0 0-5-1-5 3 0 1 1 3 4 3 1-1 2-1 3-1-2 4-6 5-6 8 0 2 2 4 6 4v4c0 3 2 2 2 2V19c0-3 2-5 3-6v17s2 1 2-2v-4c4 0 6-2 6-4 0-3-4-4-6-8 1 0 2 0 3 1 3 0 4-2 4-3 0-4-5-3-5-3-2-3-4-5-7-5 3 1 3 4 3 5 0 2-1 3-3 3z"/>
  </svg>`,
  
  // Ornamental Scroll
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30" width="100" height="30">
    <path fill="rgba(139, 103, 72, 0.12)" d="M5,15 C15,5 25,25 35,15 C45,5 55,25 65,15 C75,5 85,25 95,15 M5,15 C15,25 25,5 35,15 C45,25 55,5 65,15 C75,25 85,5 95,15"/>
  </svg>`,
  
  // Renaissance Rosette
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
    <path fill="rgba(139, 103, 72, 0.1)" d="M30,5 L35,25 L55,30 L35,35 L30,55 L25,35 L5,30 L25,25 Z"/>
    <circle cx="30" cy="30" r="5" fill="rgba(139, 103, 72, 0.15)"/>
  </svg>`,
  
  // Decorative Corner
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
    <path fill="rgba(139, 103, 72, 0.12)" d="M5,5 C15,5 45,5 45,45 M5,15 C15,15 35,15 35,45 M5,25 C15,25 25,25 25,45"/>
  </svg>`,
  
  // Laurel Wreath Element
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
    <path fill="rgba(139, 103, 72, 0.1)" d="M20,5 C15,15 10,15 5,20 C10,25 15,25 20,35 C25,25 30,25 35,20 C30,15 25,15 20,5 Z"/>
  </svg>`
];

export default function RenaissanceAnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [motifs, setMotifs] = useState<Array<{id: number, x: number, y: number, scale: number, rotation: number, motif: string}>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Generate random motifs on mount
  useEffect(() => {
    setIsMounted(true);
    
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newMotifs = [];
      
      // Create 15-20 random motifs
      const motifCount = Math.floor(Math.random() * 6) + 15;
      
      for (let i = 0; i < motifCount; i++) {
        newMotifs.push({
          id: i,
          x: Math.random() * windowWidth,
          y: Math.random() * windowHeight,
          scale: Math.random() * 0.5 + 0.5, // Scale between 0.5 and 1
          rotation: Math.random() * 360,
          motif: renaissanceMotifs[Math.floor(Math.random() * renaissanceMotifs.length)]
        });
      }
      
      setMotifs(newMotifs);
    }
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        setMotifs(prevMotifs => prevMotifs.map(motif => ({
          ...motif,
          x: (motif.x / window.innerWidth) * windowWidth,
          y: (motif.y / window.innerHeight) * windowHeight
        })));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[-15] overflow-hidden"
      aria-hidden="true"
    >
      {motifs.map((motif) => (
        <motion.div
          key={motif.id}
          className="absolute"
          initial={{ 
            x: motif.x, 
            y: motif.y, 
            scale: motif.scale, 
            rotate: motif.rotation,
            opacity: 0 
          }}
          animate={{ 
            x: [motif.x, motif.x + Math.random() * 20 - 10],
            y: [motif.y, motif.y + Math.random() * 20 - 10],
            scale: [motif.scale, motif.scale * (0.9 + Math.random() * 0.2)],
            rotate: [motif.rotation, motif.rotation + Math.random() * 10 - 5],
            opacity: [0, 0.8, 0.6]
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          dangerouslySetInnerHTML={{ __html: motif.motif }}
        />
      ))}
      
      {/* Renaissance-style illuminated border effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 0 100px rgba(246, 231, 179, 0.1)',
        background: 'radial-gradient(circle at 50% 50%, transparent 80%, rgba(191, 161, 129, 0.05) 100%)'
      }} />
    </div>
  );
} 