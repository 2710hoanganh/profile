"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNodeJs, FaDatabase, FaAws } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'ReactJS', icon: '⚛️' },
  { name: 'React Hooks', icon: '🪝' },
  { name: 'Redux', icon: '🔄' },
  { name: 'EJS', icon: '📝' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express', icon: '🚂' },
  { name: '.NET Core', icon: '💠' },
  { name: '.NET Framework', icon: '🔷' },
  { name: 'Web API', icon: '🌐' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'SQL Server', icon: '🗄️' },
  { name: 'Prisma', icon: '🔧' },
  { name: 'Entity Framework', icon: '🏗️' },
  { name: 'AutoMapper', icon: '🔄' },
  { name: 'REST API', icon: '🔌' },
  { name: 'RabbitMQ', icon: '🐰' },
  { name: 'Socket.IO', icon: '🔌' },
  { name: 'Cloudinary', icon: '☁️' },
  { name: 'Design Pattern', icon: '🎯' },
  { name: 'Git', icon: '📦' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '⚓' },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-16 gradient-text"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass p-4 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-cyan-200 font-medium">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 