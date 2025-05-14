"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section py-24 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#FDF6ED]/40 backdrop-blur-sm"></div>
      
      <div className="container-md relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto px-6 relative"
        >
          {/* Content backdrop for better readability */}
          <div className="absolute inset-0 bg-[#FDF6ED]/80 backdrop-blur-md rounded-2xl shadow-lg"></div>
          
          <div className="relative z-10 py-8 md:py-12">
            <motion.div className="overflow-hidden mb-16">
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-[#6B4F3A] tracking-tight"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)' }}
              >
                Contact
              </motion.h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#6B4F3A] to-[#BFA181] mt-4 rounded-full"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div variants={itemVariants} className="space-y-10">
                <div className="max-w-md">
                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-[#6B4F3A] mb-8 leading-relaxed font-medium"
                    style={{ textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.05)' }}
                  >
                    Feel free to reach out if you'd like to work together or just want to connect. I'm always open to discussing new projects and opportunities.
                  </motion.p>
                  
                  <div className="space-y-8">
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ x: 5, boxShadow: "0 4px 20px -5px rgba(107, 79, 58, 0.2)" }}
                      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                      className="flex items-center space-x-4 p-3 bg-white rounded-lg border border-[#E9E4DE] shadow-md"
                    >
                      <div className="w-12 h-12 flex items-center justify-center border-2 border-[#6B4F3A] rounded-full text-[#6B4F3A]">
                        <FaEnvelope className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[#6B4F3A] font-medium">hoangcm821@gmail.com</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ x: 5, boxShadow: "0 4px 20px -5px rgba(107, 79, 58, 0.2)" }}
                      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                      className="flex items-center space-x-4 p-3 bg-white rounded-lg border border-[#E9E4DE] shadow-md"
                    >
                      <div className="w-12 h-12 flex items-center justify-center border-2 border-[#6B4F3A] rounded-full text-[#6B4F3A]">
                        <FaPhone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[#6B4F3A] font-medium">+84 931872335</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ x: 5, boxShadow: "0 4px 20px -5px rgba(107, 79, 58, 0.2)" }}
                      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                      className="flex items-center space-x-4 p-3 bg-white rounded-lg border border-[#E9E4DE] shadow-md"
                    >
                      <div className="w-12 h-12 flex items-center justify-center border-2 border-[#6B4F3A] rounded-full text-[#6B4F3A]">
                        <FaMapMarkerAlt className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[#6B4F3A] font-medium">Ho Chi Minh City, Viet Nam</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              <motion.form 
                variants={itemVariants}
                className="space-y-8 bg-white p-6 rounded-xl shadow-lg border-2 border-[#E9E4DE]"
                onSubmit={handleSubmit}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#6B4F3A] mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border-2 border-[#E9E4DE] rounded-lg bg-white text-[#6B4F3A] focus:border-[#6B4F3A] focus:ring-1 focus:ring-[#6B4F3A]"
                      placeholder="Your name"
                    />
                    <motion.span 
                      className="absolute bottom-0 left-0 h-1 bg-[#6B4F3A]"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'name' ? '100%' : 0 }}
                      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#6B4F3A] mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border-2 border-[#E9E4DE] rounded-lg bg-white text-[#6B4F3A] focus:border-[#6B4F3A] focus:ring-1 focus:ring-[#6B4F3A]"
                      placeholder="Your email"
                    />
                    <motion.span 
                      className="absolute bottom-0 left-0 h-1 bg-[#6B4F3A]"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#6B4F3A] mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border-2 border-[#E9E4DE] rounded-lg bg-white text-[#6B4F3A] focus:border-[#6B4F3A] focus:ring-1 focus:ring-[#6B4F3A]"
                      placeholder="Your message"
                    />
                    <motion.span 
                      className="absolute bottom-0 left-0 h-1 bg-[#6B4F3A]"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                    />
                  </div>
                </motion.div>
                
                <motion.button
                  variants={itemVariants}
                  whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(107, 79, 58, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn bg-[#6B4F3A] hover:bg-[#5A4231] text-white px-8 py-4 flex items-center justify-center gap-2 w-full rounded-lg shadow-lg font-bold"
                >
                  <span className="relative z-10">Send Message</span>
                  <FaPaperPlane className="w-4 h-4 relative z-10" />
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 