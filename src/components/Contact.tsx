"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
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
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500 hover:from-purple-500 hover:to-cyan-300 transition-all duration-500"
          >
            Let's Connect
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div variants={itemVariants} className="space-y-10">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-6 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
                  <FaEnvelope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-200">Email</h3>
                  <p className="text-gray-300 hover:text-white transition-colors">hoangcm821@gmail.com</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-6 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
                  <FaPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-200">Phone</h3>
                  <p className="text-gray-300 hover:text-white transition-colors">+84 931872335</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-6 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-200">Location</h3>
                  <p className="text-gray-300 hover:text-white transition-colors">Ho Chi Minh City, Viet Nam</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.form 
              variants={itemVariants}
              className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cyan-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyan-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="hoangcm821@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyan-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your message"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <FaPaperPlane className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 