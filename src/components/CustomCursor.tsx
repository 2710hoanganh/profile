"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [textHovered, setTextHovered] = useState(false);
  const [hoveredText, setHoveredText] = useState('');
  const [imageHovered, setImageHovered] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  
  // Smooth motion values for cursor
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring physics for smooth following of cursor
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update the actual position for calculations
      setPosition({ x: clientX, y: clientY });
      setHidden(false);
      
      // Update motion values for smooth animation
      cursorX.set(clientX);
      cursorY.set(clientY);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleMouseEnterLink = (e: Event) => {
      setLinkHovered(true);
      const target = e.target as HTMLElement;
      const dataText = target.getAttribute('data-cursor-text');
      if (dataText) {
        setTextHovered(true);
        setHoveredText(dataText);
      }
    };
    
    const handleMouseLeaveLink = () => {
      setLinkHovered(false);
      setTextHovered(false);
      setHoveredText('');
    };

    const handleMouseEnterButton = () => setButtonHovered(true);
    const handleMouseLeaveButton = () => setButtonHovered(false);
    
    const handleMouseEnterImage = () => setImageHovered(true);
    const handleMouseLeaveImage = () => setImageHovered(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Add custom cursor classes to enable CSS styling
    document.body.classList.add('custom-cursor');

    // Add event listeners dynamically
    const addInteractionListeners = () => {
      const links = document.querySelectorAll('a, .link-effect');
      const buttons = document.querySelectorAll('button, .btn, .btn-outline');
      const interactables = document.querySelectorAll('.hover-effect, input, textarea');
      const images = document.querySelectorAll('img, .img-hover, .image-element');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', handleMouseEnterLink);
        link.addEventListener('mouseleave', handleMouseLeaveLink);
      });

      buttons.forEach(button => {
        button.addEventListener('mouseenter', handleMouseEnterButton);
        button.addEventListener('mouseleave', handleMouseLeaveButton);
      });

      interactables.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnterLink);
        element.addEventListener('mouseleave', handleMouseLeaveLink);
      });
      
      images.forEach(image => {
        image.addEventListener('mouseenter', handleMouseEnterImage);
        image.addEventListener('mouseleave', handleMouseLeaveImage);
      });

      return () => {
        links.forEach(link => {
          link.removeEventListener('mouseenter', handleMouseEnterLink);
          link.removeEventListener('mouseleave', handleMouseLeaveLink);
        });

        buttons.forEach(button => {
          button.removeEventListener('mouseenter', handleMouseEnterButton);
          button.removeEventListener('mouseleave', handleMouseLeaveButton);
        });

        interactables.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnterLink);
          element.removeEventListener('mouseleave', handleMouseLeaveLink);
        });
        
        images.forEach(image => {
          image.removeEventListener('mouseenter', handleMouseEnterImage);
          image.removeEventListener('mouseleave', handleMouseLeaveImage);
        });
      };
    };

    // Use MutationObserver to detect DOM changes and update listeners
    const observer = new MutationObserver(addInteractionListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    const cleanup = addInteractionListeners();
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      
      document.body.classList.remove('custom-cursor');
      
      cleanup();
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  // Only render on client-side
  if (typeof window === 'undefined') return null;

  return (
    <>
      <motion.div 
        className="cursor-dot"
        ref={cursorRef}
        style={{ 
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          opacity: hidden ? 0 : 1,
        }}
        animate={{
          scale: clicked ? 0.7 : buttonHovered ? 0 : imageHovered ? 0.5 : 1,
          width: imageHovered ? '24px' : '8px',
          height: imageHovered ? '24px' : '8px',
          backgroundColor: linkHovered 
            ? 'rgba(164, 117, 81, 1)' 
            : imageHovered 
              ? 'rgba(255, 255, 255, 0.8)' 
              : 'rgba(141, 103, 72, 1)',
          boxShadow: imageHovered ? '0 0 10px rgba(255, 255, 255, 0.6)' : 'none',
          mixBlendMode: imageHovered ? 'difference' : 'exclusion',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.5
        }}
      />
      
      <motion.div 
        className="cursor-outline"
        ref={cursorOutlineRef}
        style={{ 
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          opacity: hidden ? 0 : 0.6,
        }}
        animate={{
          scale: linkHovered ? 1.5 : buttonHovered ? 2 : imageHovered ? 1.8 : 1,
          backgroundColor: buttonHovered 
            ? 'rgba(164, 117, 81, 0.15)' 
            : linkHovered 
              ? 'rgba(164, 117, 81, 0.1)' 
              : imageHovered
                ? 'rgba(255, 255, 255, 0.1)'
                : 'transparent',
          borderColor: imageHovered 
            ? 'rgba(255, 255, 255, 0.6)' 
            : linkHovered || buttonHovered 
              ? 'rgba(164, 117, 81, 0.5)' 
              : 'rgba(141, 103, 72, 0.4)',
          borderWidth: imageHovered ? '1.5px' : '1.5px',
          mixBlendMode: imageHovered ? 'difference' : 'normal',
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.2
        }}
      />
      
      {textHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="cursor-text"
          style={{
            top: position.y + 20,
            left: position.x,
          }}
        >
          {hoveredText}
        </motion.div>
      )}
    </>
  );
} 