"use client";

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500">
            Cao Minh Hoang
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-100 mb-2 font-semibold">
            Software Engineer / Backend Developer
          </h2>
          <div className="text-cyan-100 text-base md:text-lg mb-2">
            Ho Chi Minh City, Viet Nam &nbsp;|&nbsp; hoangcm821@gmail.com &nbsp;|&nbsp; 0931872335
          </div>
          <div className="text-cyan-200 text-base md:text-lg mb-8">
            <a href="https://linkedin.com/in/cao-minh-hoang" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-700">linkedin.com/in/cao-minh-hoang</a>
          </div>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-12">
            I am a backend developer with strong experience in .NET, Node.js, and cloud-native systems. I enjoy building scalable, secure, and maintainable solutions, and have contributed to a variety of enterprise and startup projects. Passionate about learning, teamwork, and delivering real business value.
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#contact"
              className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-white font-bold px-8 py-3 rounded-full shadow-lg transition"
            >
              Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#projects"
              className="border-2 border-cyan-300 text-cyan-100 px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:text-white transition-colors"
            >
              View My Work
            </motion.a>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/2710hoanganh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/cao-minh-ho%C3%A0ng-b73416273/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 