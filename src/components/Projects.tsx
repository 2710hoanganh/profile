"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'

const projects = [
  {
    title: 'X-Project, Research Platform, Titan Service',
    description: 'Participated in the development of three internal systems focusing on data processing, research management, and service integration. The systems included functionalities such as real-time notifications, multi-database integration, and secure authentication.',
    technologies: ['.NET', 'C#', 'MySQL', 'SQL Server', 'PostgreSQL', 'gRPC', 'REST API', 'RabbitMQ', 'Docker', 'Grafana Loki', 'Redis Cache'],
    contributions: [
      'Developed core backend functions based on business requirements.',
      'Designed and managed relational database structures.',
      'Optimized and refactored code to enhance system performance.',
      'Troubleshot and fixed application bugs.',
      'Implemented centralized logging using Grafana Loki.',
      'Participated in the transition to microservice architecture.',
      'Integrated multiple databases into system architecture.',
      'Implemented multi-factor authentication using Google and Microsoft Authenticator.',
      'Supported deployment and ensured system scalability.',
    ],
    image_url: 'https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg',
  },
  {
    title: 'NZ App & NZ Chat',
    description: 'A social networking platform that allows users to chat and meet through organized events, focusing on real-time interaction and user engagement.',
    technologies: ['Node.js', 'TypeScript', 'MySQL', 'MongoDB', 'Redis', 'REST API', 'RabbitMQ'],
    contributions: [
      'Developed backend services based on functional requirements and system design.',
      'Designed and maintained relational and NoSQL databases.',
      'Provided scalable and secure RESTful APIs for frontend integration.',
      'Implemented real-time communication using Socket.IO.',
      'Integrated AI-powered features into the chat system via RabbitMQ.',
      'Handled media upload and user authentication using Cloudinary and Argon2.',
    ],
    image_url: 'https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg',
  },
  {
    title: "What's The Price", 
    description: 'A pricing and negotiation analytics platform that provides insights into supplier pricing to support strategic purchasing decisions.',
    technologies: ['.NET', 'Web API', 'React.js', 'SQL Server', 'Redux', 'CQRS Pattern', 'React Hooks'],
    contributions: [
      'Engineered and optimized frontend and backend features based on detailed functional specifications.',
      'Refactored legacy code to enhance maintainability, scalability, and performance.',
      'Diagnosed and resolved bugs to meet quality standards and ensure smooth user experience.',
      'Collaborated in an Agile SCRUM environment, contributing to sprint planning, reviews, and daily stand-ups.',
      'Engaged in direct communication with Finnish stakeholders to clarify requirements and report development progress.',
      'Applied the CQRS (Command Query Responsibility Segregation) pattern to decouple data modification from data retrieval logic.',
      'Strengthened expertise in Git through advanced branching strategies and participating in code review workflows.',
      'Reinforced core knowledge of React.js and Redux through real-world feature implementation and state management.',
    ],
    image_url: 'https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg',
  },
  {
    title: 'LMS Library',
    description: 'An online library system enabling teachers to upload materials, create lessons, and manage class topics. Students can view and download resources, while administrators manage accounts, classes, and approve uploaded content.',
    technologies: ['.NET Core 6', 'Entity Framework', 'AutoMapper'],
    contributions: [
      'Designed and implemented scalable backend services and relational database schema.',
      'Developed RESTful APIs for lesson management and file access.',
      'Performed thorough testing and optimization for system stability.',
    ],
    image_url: 'https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg',
  },
  {
    title: 'E-commerce Final Project',
    description: 'A full-featured e-commerce platform for selling electronic products such as phones, tablets, and accessories. Included admin functionalities for managing users, products, and orders.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'ReactJS', 'Express', 'React Hooks'],
    contributions: [
      'Developed backend services, API endpoints, and integrated with MongoDB.',
      'Implemented a responsive frontend using ReactJS.',
      'Ensured seamless integration between client and server with effective error handling.',
    ],
    image_url: 'https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg',
  },
  {
    title: 'Ideas Management System',
    description: 'A collaborative platform designed for universities to collect and manage ideas from employees across departments. Supports both public and private posting options.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'EJS'],
    contributions: [
      'Designed and built fullstack functionality with focus on clean architecture.',
      'Managed business activities including sprint planning, daily standups, and backlog refinement.',
      'Debugged and enhanced system performance for improved usability.',
    ],
    image_url: 'https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg',
  },
]

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const displayProjects = projects.slice(0, 9)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 3, spacing: 40 },
    loop: true,
    breakpoints: {
      '(max-width: 1024px)': { slides: { perView: 2, spacing: 24 } },
      '(max-width: 600px)': { slides: { perView: 1, spacing: 12 } },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
  })

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
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container max-w-7xl mx-auto px-8 relative z-10">
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
            Featured Projects
          </motion.h2>
          <div className="relative">
            <div ref={sliderRef} className="keen-slider px-0">
              {displayProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="keen-slider__slide flex flex-col items-center h-full"
                >
                  <div className="glass rounded-2xl overflow-hidden shadow-2xl flex flex-col w-full max-w-xs h-[780px] hover:border-cyan-400/50 transition-all duration-300">
                    <div className="relative h-60 rounded-t-2xl overflow-hidden group">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="#"
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <FaGithub className="w-5 h-5 text-white" />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="#"
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <FaExternalLinkAlt className="w-5 h-5 text-white" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col h-full min-h-0">
                      <h3 className="text-xl font-bold mb-2 text-cyan-200">{project.title}</h3>
                      <p className="text-gray-300 mb-4 text-base line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-200 rounded-full border border-cyan-400/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mb-2 flex-1 min-h-0 overflow-y-auto">
                        <p className="font-semibold text-cyan-200 mb-2">Key Contributions:</p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 text-sm space-y-1">
                          {project.contributions.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-3 hover:border-cyan-400/50 transition-all duration-300"
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-cyan-200">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => instanceRef.current?.next()}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-3 hover:border-cyan-400/50 transition-all duration-300"
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-cyan-200">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: 3 }).map((_, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => instanceRef.current?.moveToIdx(idx * 3)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentSlide / 3) === idx 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500' 
                      : 'bg-gray-600'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 