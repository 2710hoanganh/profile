"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import TextureOverlay from './TextureOverlay'
import IlluminatedLetter from './IlluminatedLetter'
import RenaissanceDecorator from './RenaissanceDecorator'
import React from 'react'
import RenaissanceScroll from './RenaissanceScroll'
import RenaissanceFrame from './RenaissanceFrame'
import RenaissanceCaption from './RenaissanceCaption'

// Define a type for project items
type ProjectItem = {
  title: string;
  description: string;
  technologies: string[];
  contributions: string[];
  image_url: string;
  aspect_ratio: string;
  object_position?: string;
};

const projects: ProjectItem[] = [
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
    image_url: '/mona-lisa.jpg',
    aspect_ratio: '800/1192',
    object_position: 'center 30%'
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
    image_url: '/creation-of-adam.jpg',
    aspect_ratio: '800/363',
    object_position: 'center'
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
    image_url: '/renaissance-real.jpg',
    aspect_ratio: '800/502',
    object_position: 'center'
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
    image_url: '/renaissance-images/vitruvian-man.jpg',
    aspect_ratio: '800/1088',
    object_position: 'center 40%'
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
    image_url: '/renaissance-images/school-of-athens.jpg',
    aspect_ratio: '800/621',
    object_position: 'center'
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
    image_url: '/birth-of-venus.jpg',
    aspect_ratio: '1920/1206',
    object_position: 'center'
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [expandedContributions, setExpandedContributions] = useState<Record<string, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleContributions = (title: string) => {
    setExpandedContributions(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
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

  // Prevent hydration mismatch by only rendering motion effects on client
  if (!isMounted) {
    return (
      <section id="projects" className="section py-24 md:py-32 relative renaissance-section">
        <div className="renaissance-bg-overlay absolute inset-0"></div>
        <div className="container-md relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="renaissance-header">
              <h2 className="text-4xl md:text-5xl font-semibold renaissance-title">
                Projects
              </h2>
            </div>
            
            <div className="space-y-32">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="flex flex-col md:flex-row gap-8 md:gap-16"
                >
                  <div className="w-full md:w-2/5 flex flex-col">
                    <RenaissanceFrame 
                      src={project.image_url}
                      alt={project.title}
                      aspectRatio={project.aspect_ratio}
                      objectPosition={project.object_position}
                    />
                    <div className="mt-2">
                      <RenaissanceCaption text={project.title} />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-3/5 space-y-6">
                    <div className="overflow-hidden">
                      <h3 className="text-2xl font-medium text-[#8D6748]">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-[#6B4F3A] leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Static content without animations */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section py-24 md:py-32 relative renaissance-section">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#FDF6ED]/40 backdrop-blur-sm"></div>
      <TextureOverlay />
      
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
            <motion.div 
              variants={itemVariants}
              className="renaissance-header mb-16"
            >
              <h2 
                className="text-4xl md:text-5xl font-bold text-[#6B4F3A] tracking-tight"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)' }}
              >
                <IlluminatedLetter letter="P" size="lg" animationDelay={0.2} className="mr-2" />
                rojects
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#6B4F3A] to-[#BFA181] mt-4 rounded-full"></div>
              <RenaissanceDecorator type="header" animationDelay={0.4} />
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              className="space-y-32"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="flex flex-col md:flex-row gap-8 md:gap-16 relative"
                >
                  {/* Project card background */}
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg -z-10"></div>
                  
                  <div className="w-full md:w-2/5 flex flex-col p-4">
                    <div className="shadow-xl rounded-lg overflow-hidden border-2 border-[#E9E4DE]">
                      <RenaissanceFrame 
                        src={project.image_url}
                        alt={project.title}
                        aspectRatio={project.aspect_ratio}
                        objectPosition={project.object_position}
                      />
                    </div>
                    <div className="mt-3">
                      <RenaissanceCaption text={project.title} />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-3/5 space-y-6 p-4">
                    <div className="overflow-hidden">
                      <h3 
                        className="text-2xl font-bold text-[#6B4F3A]"
                        style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-[#6B4F3A] leading-relaxed font-medium">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-[#8D6748] mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-white rounded-full text-sm font-medium text-[#6B4F3A] border border-[#E9E4DE] shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <button
                        onClick={() => toggleContributions(project.title)}
                        className="flex items-center text-[#8D6748] font-medium hover:text-[#6B4F3A] transition-colors"
                      >
                        <span>{expandedContributions[project.title] ? 'Hide' : 'Show'} contributions</span>
                        <span className="ml-2 text-xs">
                          {expandedContributions[project.title] ? '▲' : '▼'}
                        </span>
                      </button>
                      
                      {expandedContributions[project.title] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 pl-4 border-l-2 border-[#BFA181]"
                        >
                          <ul className="space-y-2">
                            {project.contributions.map((contribution, i) => (
                              <li key={i} className="text-[#6B4F3A] flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#BFA181] mt-1.5 mr-2 flex-shrink-0"></span>
                                <span>{contribution}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 