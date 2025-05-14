"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'experience', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is in viewport and not too far below
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#', id: 'home' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const logoAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 backdrop-blur-lg bg-[#FDF6ED]/75 shadow-sm border-b border-[#E9E4DE]' 
          : 'py-5'
      }`}
    >
      <div className="container-md mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={logoAnimation}
          className="relative"
        >
          <a href="#" className="font-bold text-2xl text-[#8D6748] flex items-center">
            <div className="relative flex items-center">
              <span className="text-[#A47551]">C</span>
              <span className="text-[#8D6748]">M</span>
              <span className="text-[#BFA181]">H</span>
              <motion.div 
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#A47551] to-[#BFA181]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
              />
            </div>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 z-20">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a 
                href={link.href}
                className={`relative px-2 py-1 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-[#A47551]'
                    : 'text-[#6B4F3A] hover:text-[#A47551]'
                }`}
                data-cursor-text={link.name}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-md bg-[#A47551]/10"
                    style={{ borderRadius: 4 }}
                    transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#A47551] transform origin-left transition-transform duration-300 ${
                  activeSection === link.id ? 'scale-x-100' : 'scale-x-0'
                }`}></span>
              </a>
            </motion.div>
          ))}
          
          <div className="flex items-center space-x-5 ml-6">
            <motion.a
              href="https://github.com/2710hoanganh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8D6748] hover:text-[#A47551] transition-colors"
              aria-label="Github"
              whileHover={{ scale: 1.1 }}
              data-cursor-text="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/cao-minh-ho%C3%A0ng-b73416273/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8D6748] hover:text-[#A47551] transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1 }}
              data-cursor-text="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-[#8D6748] z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#FDF6ED]/95 backdrop-blur-md flex flex-col justify-center items-center z-40 md:hidden"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a 
                    href={link.href}
                    className={`text-${activeSection === link.id ? '[#A47551]' : '[#8D6748]'} text-2xl font-medium relative`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <motion.div 
                        className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#A47551]"
                        layoutId="mobileActiveSection"
                      />
                    )}
                  </a>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                className="flex items-center space-x-6 mt-8"
              >
                <a
                  href="https://github.com/2710hoanganh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8D6748] hover:text-[#A47551] transition-colors"
                  aria-label="Github"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/cao-minh-ho%C3%A0ng-b73416273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8D6748] hover:text-[#A47551] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 