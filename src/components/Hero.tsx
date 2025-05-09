"use client";

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
                <img
                  src="/profilePic.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Cao Minh Hoang
          </h1>
          
          <div className="h-20 mb-4">
            <TypeAnimation
              sequence={[
                'Software Engineer',
                1000,
                'Backend Developer',
                1000,
                'Cloud Native Enthusiast',
                1000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-3xl text-cyan-200 font-semibold"
              repeat={Infinity}
            />
          </div>

          <div className="text-cyan-100 text-base md:text-lg mb-2 glass px-6 py-3 rounded-full inline-block">
            Ho Chi Minh City, Viet Nam &nbsp;|&nbsp; hoangcm821@gmail.com &nbsp;|&nbsp; 0931872335
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 glass px-8 py-6 rounded-2xl"
          >
            I am a backend developer with strong experience in .NET, Node.js, and cloud-native systems. I enjoy building scalable, secure, and maintainable solutions, and have contributed to a variety of enterprise and startup projects. Passionate about learning, teamwork, and delivering real business value.
          </motion.p>

          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-cyan-500/25"
            >
              Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="border-2 border-cyan-300 text-cyan-100 px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-all duration-300 hover:shadow-cyan-500/25"
            >
              View My Work
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-8 mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/2710hoanganh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://www.linkedin.com/in/cao-minh-ho%C3%A0ng-b73416273/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 