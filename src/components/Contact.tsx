"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FaEnvelope className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-cyan-200">Email</h3>
                  <p className="text-white">hoangcm821@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaPhone className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-cyan-200">Phone</h3>
                  <p className="text-white">+84 931872335</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-cyan-200">Location</h3>
                  <p className="text-white">Ho Chi Minh City, Viet Nam</p>
                </div>
              </div>
            </div>
            <form className="space-y-6 bg-white/80 dark:bg-gray-900/80 p-8 rounded-lg shadow-2xl border-2 border-cyan-300">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cyan-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-cyan-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyan-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-cyan-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="hoangcm821@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyan-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-cyan-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Your message"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 