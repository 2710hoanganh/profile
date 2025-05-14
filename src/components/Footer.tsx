"use client";

import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  
  // Parallax effect for footer
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  
  return (
    <footer 
      ref={footerRef} 
      className="pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background and decorative elements */}
      <div className="absolute inset-0 bg-[#FDF6ED]/70 backdrop-blur-sm -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6B4F3A] via-[#BFA181] to-[#6B4F3A]"></div>
      <div className="absolute -top-10 left-0 right-0 h-10 overflow-hidden">
        <div className="w-full h-20 rounded-[100%] bg-[#FDF6ED]/80 border-t border-[#E9E4DE]"></div>
      </div>
      
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" aria-hidden="true"></div>
      
      {/* Decorative shapes */}
      <div className="absolute right-[5%] top-[15%] w-32 h-32 rounded-full bg-[#6B4F3A]/5 blur-xl" aria-hidden="true"></div>
      <div className="absolute left-[10%] bottom-[20%] w-40 h-40 rounded-full bg-[#BFA181]/5 blur-xl" aria-hidden="true"></div>
      
      <motion.div 
        className="container-md relative"
        style={{ y, opacity }}
      >
        <div className="max-w-5xl mx-auto px-6 relative">
          {/* Content backdrop for better readability */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg -z-10"></div>
          
          <div className="relative z-10 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-5 space-y-5">
                <div className="inline-block relative">
                  <h4 
                    className="text-2xl font-bold text-[#6B4F3A]"
                    style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                  >
                    Cao Minh Hoang
                  </h4>
                  <div className="absolute -bottom-2 left-0 w-16 h-1.5 bg-gradient-to-r from-[#6B4F3A] to-[#BFA181]"></div>
                </div>
                <p className="text-[#6B4F3A] max-w-sm mt-6 font-medium leading-relaxed">
                  Backend-focused software engineer passionate about building scalable, maintainable systems and exploring new technologies.
                </p>
                <div className="flex space-x-5 items-center mt-8">
                  <motion.a
                    href="https://github.com/2710hoanganh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B4F3A] hover:text-[#5A4231] transition-colors bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md border border-[#E9E4DE]"
                    aria-label="Github"
                    data-cursor-text="GitHub Profile"
                    whileHover={{ scale: 1.1, boxShadow: "0 4px 15px -2px rgba(107, 79, 58, 0.2)" }}
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/hoangcm821/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B4F3A] hover:text-[#5A4231] transition-colors bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md border border-[#E9E4DE]"
                    aria-label="LinkedIn"
                    data-cursor-text="LinkedIn Profile"
                    whileHover={{ scale: 1.1, boxShadow: "0 4px 15px -2px rgba(107, 79, 58, 0.2)" }}
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
              
              <div className="md:col-span-3 space-y-5">
                <h4 
                  className="text-lg font-bold text-[#6B4F3A]"
                  style={{ textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.05)' }}
                >
                  Quick Links
                </h4>
                <nav>
                  <ul className="space-y-4">
                    {[
                      { name: 'Home', href: '#', cursor: 'Top' },
                      { name: 'Skills', href: '#skills', cursor: 'My Skills' },
                      { name: 'Projects', href: '#projects', cursor: 'My Projects' },
                      { name: 'Experience', href: '#experience', cursor: 'My Experience' },
                      { name: 'Contact', href: '#contact', cursor: 'Contact Me' },
                    ].map((link) => (
                      <li key={link.name}>
                        <motion.a 
                          href={link.href}
                          className="text-[#6B4F3A] hover:text-[#5A4231] transition-colors font-medium flex items-center"
                          data-cursor-text={link.cursor}
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#BFA181] mr-2"></span>
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              
              <div className="md:col-span-4 space-y-5">
                <h4 
                  className="text-lg font-bold text-[#6B4F3A]"
                  style={{ textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.05)' }}
                >
                  Contact
                </h4>
                <p className="text-[#6B4F3A] font-medium flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#BFA181] mr-2"></span>
                  Ho Chi Minh City, Viet Nam
                </p>
                <p className="text-[#6B4F3A] font-medium flex items-center">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#BFA181] mr-2"></span>
                  <motion.a 
                    href="mailto:hoangcm821@gmail.com"
                    className="hover:text-[#5A4231] transition-colors"
                    data-cursor-text="Send Email"
                    whileHover={{ scale: 1.01 }}
                  >
                    hoangcm821@gmail.com
                  </motion.a>
                </p>
                
                <div className="pt-6 mt-8 border-t border-[#E9E4DE] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <motion.p 
                    className="text-sm text-[#6B4F3A] font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    © {currentYear} Cao Minh Hoang. All rights reserved.
                  </motion.p>
                  
                  <motion.p 
                    className="text-sm text-[#6B4F3A] font-medium flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Made with <FaHeart className="text-[#6B4F3A] w-3 h-3" /> in Vietnam
                  </motion.p>
                </div>
              </div>
            </div>
            
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.button
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(107, 79, 58, 0.2)" }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 group bg-white px-6 py-2.5 rounded-full shadow-md border border-[#E9E4DE]"
                data-cursor-text="Back to Top"
              >
                <span className="text-sm text-[#6B4F3A] font-medium transition-colors">Back to top</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-[#6B4F3A] transform rotate-180 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
} 