'use client'

import { useEffect, useState } from 'react';

export default function RenaissanceCollageBackground() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none">
      {/* Base parchment texture background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#e8d8b7',
          backgroundImage: `url('/paper-texture.svg')`,
          backgroundRepeat: 'repeat',
          opacity: 0.9
        }}
      />

      {/* Main Renaissance artwork - School of Athens (center) */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%]"
        style={{
          backgroundImage: `url('/renaissance-images/school-of-athens.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.25,
          boxShadow: '0 0 30px 20px rgba(232, 216, 183, 0.8)'
        }}
      />

      {/* Left side - Vitruvian Man */}
      <div 
        className="absolute left-0 bottom-0 w-[35%] h-[80%] opacity-10"
        style={{
          backgroundImage: `url('/renaissance-images/vitruvian-man.jpg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Right side - Creation of Adam hands */}
      <div 
        className="absolute right-0 top-[10%] w-[60%] h-[45%]"
        style={{
          backgroundImage: `url('/creation-hands-new.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3
        }}
      />

      {/* Birth of Venus - bottom right */}
      <div 
        className="absolute right-[10%] bottom-[5%] w-[40%] h-[40%]"
        style={{
          backgroundImage: `url('/birth-of-venus.jpg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2
        }}
      />

      {/* Mona Lisa - top left */}
      <div 
        className="absolute left-[5%] top-[5%] w-[25%] h-[35%]"
        style={{
          backgroundImage: `url('/mona-lisa.jpg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2
        }}
      />

      {/* Old manuscript elements and drawings overlay */}
      <div 
        className="absolute inset-0 mix-blend-multiply"
        style={{
          backgroundImage: `url('/renaissance-collage/manuscript.png')`,
          backgroundSize: '80%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.08
        }}
      />

      {/* Renaissance pattern overlay */}
      <div 
        className="absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage: `url('/renaissance-pattern.png')`,
          backgroundRepeat: 'repeat',
          opacity: 0.02
        }}
      />

      {/* Subtle vignette overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          boxShadow: 'inset 0 0 200px 100px rgba(107, 79, 58, 0.6)',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Semi-transparent overlay to make text more readable */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: 'rgba(232, 216, 183, 0.5)',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Extra light overlay for better text contrast */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'radial-gradient(circle at center, rgba(253, 246, 237, 0.4) 0%, rgba(253, 246, 237, 0.1) 70%)',
        }}
      />
    </div>
  );
} 