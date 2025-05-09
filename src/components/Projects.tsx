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

  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f2027 0%, #203a43 100%)' }}>
      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500">
            Featured Projects
          </h2>
          <div className="relative">
            <div ref={sliderRef} className="keen-slider px-0">
              {displayProjects.map((project, index) => (
                <div className="keen-slider__slide flex flex-col items-center h-full" key={project.title}>
                  <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col w-full max-w-xs h-[780px] border-2 border-cyan-300 backdrop-blur-md">
                    <div className="relative h-60 rounded-t-2xl overflow-hidden">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col h-full min-h-0">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-base line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-200 to-sky-300 text-cyan-900 rounded-full font-semibold shadow"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mb-2 flex-1 min-h-0 overflow-y-auto">
                        <p className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">Key Contributions:</p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 text-sm">
                          {project.contributions.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Nút điều hướng trái/phải */}
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cyan-200 dark:bg-cyan-900 rounded-full shadow-lg p-3 hover:bg-cyan-300 dark:hover:bg-cyan-700 text-2xl"
              aria-label="Previous"
              style={{ transform: 'translateY(-50%)' }}
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cyan-200 dark:bg-cyan-900 rounded-full shadow-lg p-3 hover:bg-cyan-300 dark:hover:bg-cyan-700 text-2xl"
              aria-label="Next"
              style={{ transform: 'translateY(-50%)' }}
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
            </button>
            {/* Pagination chấm tròn */}
            <div className="flex justify-center mt-6">
              {Array.from({ length: 3 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx * 3)}
                  className={`mx-1 w-3 h-3 rounded-full ${Math.floor(currentSlide / 3) === idx ? 'bg-cyan-400' : 'bg-gray-300 dark:bg-gray-600'}`}
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