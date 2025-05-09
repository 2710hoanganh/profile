"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCode, FaDatabase, FaCloud } from 'react-icons/fa'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl font-bold text-center mb-12 gradient-text">
              Education
            </h2>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500">
                      <FaGraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-cyan-200">GreenWich University</h3>
                  </div>
                  <p className="text-cyan-300 mb-2">Second Class Honours - Computer Science</p>
                  <p className="text-cyan-400 mb-2">Date: 05/2023</p>
                  <p className="text-cyan-400 mb-2">Relevant Coursework:</p>
                  <ul className="list-disc list-inside text-cyan-200 ml-4 space-y-1">
                    <li>The Structured Query Language (SQL)</li>
                    <li>C# for .NET Developers</li>
                  </ul>
                </div>
                <div className="text-right">
                  <p className="text-cyan-300 font-medium">Viet Nam</p>
                  <p className="text-cyan-300 font-medium">Graduation</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-12 gradient-text"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a backend-focused software engineer with strong experience in building scalable, maintainable systems using .NET Core, Node.js, and modern JavaScript/TypeScript frameworks. Proficient in both relational and NoSQL databases (SQL Server, MySQL, MongoDB), REST API, Web API, and message-driven architectures (RabbitMQ, Socket.IO). Skilled in cloud-native development, containerization (Docker, Kubernetes), and DevOps practices. Passionate about clean code, design patterns, and continuous learning.
              </p>
              <p className="text-lg text-cyan-200 leading-relaxed">
                With several years of experience in the industry, I've worked on various projects ranging from small business websites to large-scale applications.
              </p>
              <p className="text-lg text-cyan-100 leading-relaxed">
                I'm constantly learning and exploring new technologies to stay at the forefront of web development.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
                    <FaCode className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Frontend</h3>
                </div>
                <p className="text-cyan-200">ReactJS, EJS, JavaScript, TypeScript, HTML, CSS</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
                    <FaDatabase className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Backend</h3>
                </div>
                <p className="text-cyan-200">Node.js, Express, .NET Core, ASP.NET, .NET Framework, Web API, REST API</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
                    <FaDatabase className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Database & MQ</h3>
                </div>
                <p className="text-cyan-200">MongoDB, MySQL, SQL Server, Prisma, Entity Framework, AutoMapper, RabbitMQ, Socket.IO, Cloudinary, Argon2</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
                    <FaCloud className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">DevOps & Tools</h3>
                </div>
                <p className="text-cyan-200">Git, Docker, Kubernetes, Design Pattern</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 