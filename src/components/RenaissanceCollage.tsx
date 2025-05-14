'use client'

import { useEffect, useState } from 'react';

export default function RenaissanceCollage() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const images = [
    { 
      src: '/mona-lisa.jpg', 
      alt: 'Mona Lisa by Leonardo da Vinci', 
      style: { 
        top: '10%', 
        left: '5%', 
        width: '180px', 
        height: 'auto', 
        opacity: 0.15,
        transform: 'rotate(-3deg)'
      } 
    },
    { 
      src: '/creation-of-adam.jpg', 
      alt: 'Creation of Adam by Michelangelo', 
      style: { 
        top: '60%', 
        right: '5%', 
        width: '280px', 
        height: 'auto', 
        opacity: 0.15,
        transform: 'rotate(2deg)'
      } 
    },
    { 
      src: '/renaissance-images/vitruvian-man.jpg', 
      alt: 'Vitruvian Man by Leonardo da Vinci', 
      style: { 
        bottom: '15%', 
        left: '10%', 
        width: '220px', 
        height: 'auto', 
        opacity: 0.12,
        transform: 'rotate(1deg)'
      } 
    },
    { 
      src: '/renaissance-images/school-of-athens.jpg', 
      alt: 'School of Athens by Raphael', 
      style: { 
        top: '25%', 
        right: '15%', 
        width: '300px', 
        height: 'auto', 
        opacity: 0.1,
        transform: 'rotate(-1deg)'
      } 
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-10]">
      {images.map((img, index) => (
        <div 
          key={index}
          className="absolute shadow-lg"
          style={{
            ...img.style,
            position: 'absolute',
            mixBlendMode: 'multiply',
            filter: 'sepia(20%)',
            transition: 'all 0.5s ease-in-out',
            border: '3px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}
        >
          <img 
            src={img.src} 
            alt={img.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      ))}
    </div>
  );
} 