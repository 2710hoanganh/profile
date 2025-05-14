"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  
  // Mouse movement tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smoothed values for the tilt effect
  const rotateX = useSpring(useTransform(mouseY, [0, 300], [10, -10]), {
    stiffness: 150,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 300], [-10, 10]), {
    stiffness: 150,
    damping: 30
  });
  
  // Main parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Background shapes parallax
  const shape1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const shape2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const shape3Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const shape1Rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const shape2Rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const shape3Rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  useEffect(() => {
    setIsLoaded(true);
    
    // 3D effect on mouse move (for desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const textRevealVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  };

  const staggerDelay = 0.15;
  
  // Button hover variants
  const btnHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.98 }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center px-6 py-32 pt-40 overflow-hidden"
      id="home"
    >
      {/* Background decorative elements with parallax */}
      <motion.div 
        className="absolute right-[10%] top-[20%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#F6E7B3]/20 blur-xl"
        style={{ 
          y: shape1Y,
          rotate: shape1Rotate,
          transformOrigin: "center"
        }}
        aria-hidden="true"
      />
      <motion.div 
        className="absolute left-[5%] bottom-[30%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-[#D6D2B8]/30 blur-xl"
        style={{ 
          y: shape2Y, 
          rotate: shape2Rotate,
          transformOrigin: "center"
        }}
        aria-hidden="true"
      />
      <motion.div 
        className="absolute right-[20%] bottom-[10%] w-24 h-24 md:w-40 md:h-40 rounded-full bg-[#BFA181]/20 blur-xl"
        style={{ 
          y: shape3Y,
          rotate: shape3Rotate,
          transformOrigin: "center"
        }}
        aria-hidden="true"
      />
      
      {/* Additional subtle decoration - small dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#A47551]/40"></div>
        <div className="absolute top-[20%] right-[25%] w-2 h-2 rounded-full bg-[#BFA181]/30"></div>
        <div className="absolute bottom-[25%] left-[30%] w-2 h-2 rounded-full bg-[#8D6748]/30"></div>
        <div className="absolute bottom-[15%] right-[10%] w-1 h-1 rounded-full bg-[#A47551]/40"></div>
      </div>
      
      {/* Content container with backdrop */}
      <motion.div 
        className="container-md relative z-10" 
        style={{ y, opacity }}
      >
        {/* Semi-transparent backdrop for better text readability */}
        <div className="absolute inset-0 bg-[#FDF6ED]/85 backdrop-blur-md rounded-2xl -z-10 shadow-xl"></div>
        
        <div className="flex flex-col max-w-5xl mx-auto p-8 md:p-12">
          <div className="mb-12">
            <div className="overflow-hidden mb-8">
              <motion.h1 
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={textRevealVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#6B4F3A] tracking-tight leading-tight"
                style={{ 
                  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)',
                  WebkitTextStroke: '1px rgba(107, 79, 58, 0.4)'
                }}
              >
                <span className="inline-block">Cao</span>{' '}
                <span className="inline-block ml-2">Minh</span>{' '}
                <span className="inline-block ml-2 relative">
                  Hoang
                  <motion.span
                    className="absolute -bottom-3 left-0 h-2 bg-gradient-to-r from-[#6B4F3A] to-[#8D6748]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      delay: 1.5, 
                      duration: 0.8, 
                      ease: [0.65, 0, 0.35, 1] 
                    }}
                  />
                </span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: staggerDelay }}
              className="h-16 mb-10"
            >
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  1500,
                  'Backend Developer',
                  1500,
                  'Full Stack Developer',
                  1500,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-3xl text-[#6B4F3A] font-bold"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)' }}
                repeat={Infinity}
              />
            </motion.div>
            
            <div className="space-y-12">
              <div className="overflow-hidden">
                <motion.p 
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  variants={textRevealVariants}
                  transition={{ delay: staggerDelay * 2 }}
                  className="text-lg md:text-xl text-[#6B4F3A] max-w-3xl leading-relaxed font-semibold"
                  style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                >
                  I'm a backend-focused software engineer experienced in building scalable systems with .NET Core, Node.js, and modern JavaScript/TypeScript. Skilled in both SQL/NoSQL databases, REST/Web APIs, and message-driven architectures.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: staggerDelay * 3 }}
                className="flex flex-wrap gap-6 mb-12"
              >
                <motion.a
                  href="#contact"
                  className="btn bg-[#6B4F3A] hover:bg-[#5A4231] text-white px-8 py-3 relative overflow-hidden shadow-xl rounded-lg border-2 border-[#6B4F3A] font-bold"
                  data-cursor-text="Connect with me"
                  variants={btnHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="relative z-10">Get in Touch</span>
                </motion.a>
                <motion.a
                  href="#projects"
                  className="btn-outline px-8 py-3 border-2 border-[#6B4F3A] text-[#6B4F3A] hover:bg-[#6B4F3A] hover:text-white relative overflow-hidden shadow-lg rounded-lg font-bold"
                  data-cursor-text="See my work"
                  variants={btnHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="relative z-10">View My Work</span>
                </motion.a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: staggerDelay * 4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <div className="text-[#6B4F3A] text-sm font-semibold">
                  Ho Chi Minh City, Viet Nam &nbsp;•&nbsp; hoangcm821@gmail.com
                </div>
                <div className="flex items-center gap-6 sm:ml-auto">
                  <motion.a
                    href="https://github.com/2710hoanganh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B4F3A] hover:text-[#5A4231] transition-colors text-2xl"
                    aria-label="Github"
                    data-cursor-text="GitHub Profile"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/hoangcm821/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B4F3A] hover:text-[#5A4231] transition-colors text-2xl"
                    aria-label="LinkedIn"
                    data-cursor-text="LinkedIn Profile"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Profile image with 3D tilt effect */}
          <motion.div 
            ref={profileRef}
            className="relative w-28 h-28 md:w-36 md:h-36 mx-auto mt-12 rounded-full overflow-hidden shadow-2xl border-4 border-[#6B4F3A]/30"
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1000
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0, 
              scale: isLoaded ? 1 : 0.8,
              transition: { 
                delay: staggerDelay * 5,
                duration: 0.8,
                ease: [0.65, 0, 0.35, 1]
              }
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("/profilePic.jpg")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6B4F3A]/30 to-transparent mix-blend-overlay" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#6B4F3A] opacity-80"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 0.8 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-sm mb-2 font-medium">Scroll down</span>
        <motion.div 
          className="w-1 h-10 bg-[#6B4F3A]/60 rounded-full"
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
} 