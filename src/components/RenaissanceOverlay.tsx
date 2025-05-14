'use client'

import { useEffect, useState } from 'react';

export default function RenaissanceOverlay() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Vignette effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{ 
          boxShadow: 'inset 0 0 150px rgba(107, 79, 58, 0.15)',
          mixBlendMode: 'multiply'
        }}
        aria-hidden="true"
      />
      
      {/* Subtle paper texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-[2] opacity-[0.04]"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' fill='%238D6748'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply'
        }}
        aria-hidden="true"
      />
      
      {/* Paper texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[2] opacity-[0.03]"
        style={{ 
          backgroundImage: `url('/paper-texture.svg')`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply'
        }}
        aria-hidden="true"
      />
      
      {/* Renaissance ornamental corners */}
      <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-[3] opacity-[0.07]">
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5C20 5 123 5 123 123" stroke="#8D6748" strokeWidth="2" strokeDasharray="4 6" />
          <path d="M5 20C20 20 108 20 108 123" stroke="#8D6748" strokeWidth="1" strokeDasharray="4 6" />
          <path d="M20 5C20 20 20 108 123 108" stroke="#8D6748" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="5" cy="5" r="4" fill="#8D6748" />
        </svg>
      </div>
      
      <div className="fixed top-0 right-0 w-32 h-32 pointer-events-none z-[3] opacity-[0.07]" style={{ transform: 'scaleX(-1)' }}>
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5C20 5 123 5 123 123" stroke="#8D6748" strokeWidth="2" strokeDasharray="4 6" />
          <path d="M5 20C20 20 108 20 108 123" stroke="#8D6748" strokeWidth="1" strokeDasharray="4 6" />
          <path d="M20 5C20 20 20 108 123 108" stroke="#8D6748" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="5" cy="5" r="4" fill="#8D6748" />
        </svg>
      </div>
      
      <div className="fixed bottom-0 left-0 w-32 h-32 pointer-events-none z-[3] opacity-[0.07]" style={{ transform: 'scaleY(-1)' }}>
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5C20 5 123 5 123 123" stroke="#8D6748" strokeWidth="2" strokeDasharray="4 6" />
          <path d="M5 20C20 20 108 20 108 123" stroke="#8D6748" strokeWidth="1" strokeDasharray="4 6" />
          <path d="M20 5C20 20 20 108 123 108" stroke="#8D6748" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="5" cy="5" r="4" fill="#8D6748" />
        </svg>
      </div>
      
      <div className="fixed bottom-0 right-0 w-32 h-32 pointer-events-none z-[3] opacity-[0.07]" style={{ transform: 'scale(-1)' }}>
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5C20 5 123 5 123 123" stroke="#8D6748" strokeWidth="2" strokeDasharray="4 6" />
          <path d="M5 20C20 20 108 20 108 123" stroke="#8D6748" strokeWidth="1" strokeDasharray="4 6" />
          <path d="M20 5C20 20 20 108 123 108" stroke="#8D6748" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="5" cy="5" r="4" fill="#8D6748" />
        </svg>
      </div>
    </>
  );
} 