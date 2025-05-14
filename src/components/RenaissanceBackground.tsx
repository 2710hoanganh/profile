'use client'

import { useEffect, useState } from 'react';

export default function RenaissanceBackground() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Background with real Renaissance artwork */}
      <div 
        className="fixed inset-0 z-[-20] pointer-events-none"
        style={{
          backgroundImage: `url('/renaissance-real.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* SVG Renaissance art patterns */}
      <div 
        className="fixed inset-0 z-[-19] pointer-events-none"
        style={{
          backgroundImage: `url('/renaissance-art.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      {/* SVG Renaissance figures */}
      <div 
        className="fixed inset-0 z-[-18] pointer-events-none"
        style={{
          backgroundImage: `url('/renaissance-figures.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      
      {/* Soft light painting effect */}
      <div 
        className="fixed inset-0 z-[-17] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cfilter id='a'%3E%3CfeGaussianBlur stdDeviation='40' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'%3E%3C/rect%3E%3Ccircle cx='400' cy='400' r='200' fill='%23f6e7b3' opacity='0.4'/%3E%3Ccircle cx='500' cy='300' r='100' fill='%23d6d2b8' opacity='0.3'/%3E%3Ccircle cx='300' cy='500' r='150' fill='%23bfa181' opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          mixBlendMode: 'soft-light'
        }}
      />
      
      {/* Pattern background */}
      <div 
        className="fixed inset-0 z-[-16] pointer-events-none"
        style={{
          backgroundColor: '#f8f2e6',
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath fill='rgba(139, 103, 72, 0.03)' d='M30 20c-2 0-3-1-3-3 0-1 0-4 3-5-3 0-5 2-7 5 0 0-5-1-5 3 0 1 1 3 4 3 1-1 2-1 3-1-2 4-6 5-6 8 0 2 2 4 6 4v4c0 3 2 2 2 2V29c0-3 2-5 3-6v17s2 1 2-2v-4c4 0 6-2 6-4 0-3-4-4-6-8 1 0 2 0 3 1 3 0 4-2 4-3 0-4-5-3-5-3-2-3-4-5-7-5 3 1 3 4 3 5 0 2-1 3-3 3z'/%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgba(139, 103, 72, 0.02)' d='M20 20c-2.5-5-8-5-10 0 2.5-2.5 4-1 10 0zm0 0c2.5 5 8 5 10 0-2.5 2.5-4 1-10 0zm0-10c-5 2.5-5 8 0 10 2.5-2.5 1-4 0-10zm0 0c5-2.5 5-8 0-10-2.5 2.5-1 4 0 10z'/%3E%3C/svg%3E")
          `,
          backgroundSize: '60px 60px, 40px 40px',
          opacity: 0.8
        }}
      />
      
      {/* Overlay with radial gradients */}
      <div 
        className="fixed inset-0 z-[-15] pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, rgba(246, 231, 179, 0.05) 0%, transparent 70%),
            radial-gradient(circle at 30% 20%, rgba(165, 129, 82, 0.08) 10%, transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(172, 142, 104, 0.08) 15%, transparent 45%),
            radial-gradient(circle at 90% 10%, rgba(165, 129, 82, 0.08) 5%, transparent 20%)
          `,
          boxShadow: 'inset 0 0 150px rgba(107, 79, 58, 0.3)'
        }}
      />
    </>
  );
} 