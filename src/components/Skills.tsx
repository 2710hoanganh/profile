"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const skills = [
  { name: 'HTML', category: 'Frontend', icon: '🌐' },
  { name: 'CSS', category: 'Frontend', icon: '🎨' },
  { name: 'JavaScript', category: 'Frontend', icon: '📜' },
  { name: 'TypeScript', category: 'Frontend', icon: '🔷' },
  { name: 'ReactJS', category: 'Frontend', icon: '⚛️' },
  { name: 'React Hooks', category: 'Frontend', icon: '🪝' },
  { name: 'Redux', category: 'Frontend', icon: '🔄' },
  { name: 'EJS', category: 'Frontend', icon: '📄' },
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'Express', category: 'Backend', icon: '🚂' },
  { name: '.NET Core', category: 'Backend', icon: '🔷' },
  { name: '.NET Framework', category: 'Backend', icon: '🔶' },
  { name: 'Web API', category: 'Backend', icon: '🌐' },
  { name: 'MongoDB', category: 'Database', icon: '🍃' },
  { name: 'MySQL', category: 'Database', icon: '💾' },
  { name: 'SQL Server', category: 'Database', icon: '🗄️' },
  { name: 'Prisma', category: 'Database', icon: '🔺' },
  { name: 'Entity Framework', category: 'Database', icon: '📦' },
  { name: 'AutoMapper', category: 'Tools', icon: '🔄' },
  { name: 'REST API', category: 'Architecture', icon: '🔌' },
  { name: 'RabbitMQ', category: 'Architecture', icon: '🐰' },
  { name: 'Socket.IO', category: 'Architecture', icon: '🔌' },
  { name: 'Cloudinary', category: 'Tools', icon: '☁️' },
  { name: 'Design Pattern', category: 'Architecture', icon: '📐' },
  { name: 'Git', category: 'DevOps', icon: '📊' },
  { name: 'Docker', category: 'DevOps', icon: '🐳' },
  { name: 'Kubernetes', category: 'DevOps', icon: '⚓' },
]

// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skills>);

// Order categories for display
const categoryOrder = ['Frontend', 'Backend', 'Database', 'Architecture', 'DevOps', 'Tools'];
const sortedCategories = Object.keys(groupedSkills).sort(
  (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  // Individual category animations
  const categoryRefs = sortedCategories.map(() => 
    useInView({
      triggerOnce: false,
      threshold: 0.1,
    })
  );
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  
  // Background shape parallax
  const shape1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const shape2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decorative elements with parallax */}
      <motion.div 
        className="absolute left-[5%] top-[15%] w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#F6E7B3]/20 blur-xl"
        style={{ y: shape1Y }}
        aria-hidden="true"
      />
      <motion.div 
        className="absolute right-[10%] bottom-[15%] w-40 h-40 md:w-72 md:h-72 rounded-full bg-[#D6D2B8]/30 blur-xl"
        style={{ y: shape2Y }}
        aria-hidden="true"
      />
      
      {/* Grain overlay for texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/grain.png')]" aria-hidden="true"></div>
      
      <motion.div 
        className="container-md relative z-10"
        style={{ y, opacity }}
      >
        <div className="max-w-5xl mx-auto px-6 py-8 relative">
          {/* Content backdrop for better readability */}
          <div className="absolute inset-0 bg-[#FDF6ED]/80 backdrop-blur-md rounded-2xl shadow-lg"></div>
          
          <div className="relative z-10">
            <motion.div
              ref={titleRef}
              initial="hidden"
              animate={titleInView ? "visible" : "hidden"}
              variants={titleVariants}
              className="mb-24 relative"
            >
              <h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-[#6B4F3A]"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)' }}
              >
                Tech Stack & Skills
              </h2>
              <p 
                className="text-xl text-[#6B4F3A] max-w-2xl font-medium"
                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
              >
                A collection of technologies and tools I've worked with and mastered throughout my career.
              </p>
              <div className="absolute h-2 w-32 bg-gradient-to-r from-[#8D6748] to-[#BFA181] bottom-[-16px] left-0 rounded-full shadow-sm"></div>
            </motion.div>

            <div className="space-y-24">
              {sortedCategories.map((category, idx) => {
                const [ref, inView] = categoryRefs[idx];
                return (
                  <motion.div 
                    key={category} 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="space-y-8"
                  >
                    <motion.h3 
                      variants={itemVariants} 
                      className="text-2xl font-semibold text-[#6B4F3A] flex items-center"
                      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                    >
                      <span className="inline-block mr-3 w-6 h-[3px] bg-[#8D6748]"></span>
                      {category}
                    </motion.h3>
                    <div className="flex flex-wrap gap-4">
                      {groupedSkills[category].map(skill => (
                        <motion.div
                          key={skill.name}
                          variants={itemVariants}
                          whileHover={{ 
                            y: -5, 
                            boxShadow: "0 10px 25px -5px rgba(107, 79, 58, 0.2)" 
                          }}
                          className="px-5 py-3 bg-white border-2 border-[#E9E4DE] rounded-lg text-[#6B4F3A] hover:border-[#8D6748] transition-all duration-300 flex items-center shadow-md"
                          data-cursor-text={`${skill.name}`}
                        >
                          <span className="mr-2 text-xl">{skill.icon}</span>
                          <span className="font-semibold">{skill.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 