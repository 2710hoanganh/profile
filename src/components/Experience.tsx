"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import TextureOverlay from './TextureOverlay'
import IlluminatedLetter from './IlluminatedLetter'
import RenaissanceDecorator from './RenaissanceDecorator'
import RenaissanceScroll from './RenaissanceScroll'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'LizAI',
    period: '6/2024 – Now',
    location: 'Ho Chi Minh City',
    project: 'X-Project, Research Platform, Titan Service',
    description: [
      'Participated in the development of three internal systems focusing on data processing, research management, and service integration.',
      'The systems included functionalities such as real-time notifications, multi-database integration, and secure authentication.'
    ],
    role: 'Backend Developer',
    teamSize: 4,
    technology: 'NET, C#, MySQL, SQL Server, PostgreSQL, gRPC, REST API, RabbitMQ, Docker, Grafana Loki, Redis Cache',
    responsibilities: [
      'Develop core backend functions based on business requirements',
      'Design and manage relational database structures',
      'Optimize and refactor existing code to enhance system performance',
      'Troubleshoot and fix application bugs',
      'Implement centralized logging using Grafana Loki',
      'Participate in the transition to microservice architecture for X-Project and Titan Service',
      'Integrate multiple databases into system architecture',
      'Implement multi-factor authentication using Google and Microsoft Authenticator',
      'Support deployment and ensure system scalability',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'NZ Team',
    period: '3/2025 – Now',
    location: 'Ho Chi Minh City',
    project: 'NZ App & NZ Chat',
    description: [
      'A social networking platform that allows users to chat and meet through organized events, focusing on real-time interaction and user engagement.'
    ],
    role: 'Backend Developer',
    teamSize: 4,
    technology: 'Node.js, TypeScript, MySQL, MongoDB, Redis, REST API, RabbitMQ',
    responsibilities: [
      'Developed backend services based on functional requirements and system design',
      'Designed and maintained relational and NoSQL databases',
      'Provided scalable and secure RESTful APIs for frontend integration',
      'Implemented real-time communication using Socket.IO',
      'Integrated AI-powered features into the chat system via RabbitMQ',
      'Handled media upload and user authentication using Cloudinary and Argon2',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'iDeaLogic',
    period: '12/2023 – 4/2024',
    location: 'Ho Chi Minh City',
    project: "What's The Price",
    description: [
      'A pricing and negotiation analytics platform that provides insights into supplier pricing to support strategic purchasing decisions.'
    ],
    role: 'Fullstack Developer',
    teamSize: 4,
    technology: '.NET, Web API, React.js, SQL Server, Redux, CQRS Pattern, React Hooks',
    responsibilities: [
      'Engineered and optimized frontend and backend features based on detailed functional specifications',
      'Refactored legacy code to enhance maintainability, scalability, and performance',
      'Diagnosed and resolved bugs to meet quality standards and ensure smooth user experience',
      'Collaborated in an Agile SCRUM environment, contributing to sprint planning, reviews, and daily stand-ups',
      'Engaged in direct communication with Finnish stakeholders to clarify requirements and report development progress',
      'Applied the CQRS (Command Query Responsibility Segregation) pattern to decouple data modification from data retrieval logic',
      'Strengthened expertise in Git through advanced branching strategies and participating in code review workflows',
      'Reinforced core knowledge of React.js and Redux through real-world feature implementation and state management',
    ],
  },
  {
    title: 'Technical Consultant',
    company: 'NavWorld',
    period: '5/2023 – 8/2024',
    location: 'Ho Chi Minh City',
    project: 'ERP Customization on Microsoft Dynamics 365 Business Central',
    description: [
      'ERP application development tailored for enterprise clients using Microsoft\'s Business Central platform.'
    ],
    role: 'Technical Consultant',
    teamSize: 5,
    technology: 'AL Language, Microsoft Dynamics 365 Business Central',
    responsibilities: [
      'Learned and applied AL language to develop and customize ERP functionalities',
      'Created custom modules and reports based on business requirements',
      'Integrated business logic into the existing ERP system',
      'Practiced deploying and testing solutions on the Business Central sandbox environment',
      'Gained understanding of core ERP concepts and architecture',
    ],
  },
  {
    title: 'Backend Developer Intern',
    company: 'Alta Media',
    period: '5/2023 – 8/2024',
    location: 'Ho Chi Minh City',
    project: 'Internal Web Application for Media Management',
    description: [
      'A system designed to manage digital content and internal operations for media services.'
    ],
    role: 'Backend Developer',
    teamSize: 3,
    technology: '.NET Core 6, C#, Web API, Redis, SQL Server',
    responsibilities: [
      'Developed and maintained backend logic using .NET Core 6',
      'Built RESTful APIs to support frontend integration',
      'Participated using Entity Framework and other .NET libraries',
      'Participated in code reviews and team development workflow',
      'Improved understanding of backend architecture and best practices in API design',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleResponsibilities = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Prevent hydration mismatch by only rendering motion effects on client
  if (!isMounted) {
    return (
      <section id="experience" className="section py-24 md:py-32 relative renaissance-section">
        <div className="renaissance-bg-overlay absolute inset-0"></div>
        <div className="container-md relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="renaissance-header">
              <h2 className="text-4xl md:text-5xl font-semibold renaissance-title">
                Experience
              </h2>
            </div>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={experience.title}>
                  <div className="scroll-paper pt-8 p-6 shadow-sm">
                    {/* Basic content without animations */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-medium text-[#8D6748] mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-[#A47551] font-medium">{experience.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#6B4F3A] font-medium">{experience.period}</p>
                        <p className="text-[#BFA181]">{experience.location}</p>
                      </div>
                    </div>
                    {/* Rest of static content */}
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="renaissance-divider my-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="section py-24 md:py-32 relative renaissance-section">
      <div className="renaissance-bg-overlay absolute inset-0"></div>
      <TextureOverlay />
      <div className="container-md relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="renaissance-header"
          >
            <h2 className="text-4xl md:text-5xl font-semibold renaissance-title">
              <IlluminatedLetter letter="E" size="lg" animationDelay={0.2} className="mr-2" />
              xperience
            </h2>
            <RenaissanceDecorator type="header" animationDelay={0.4} />
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                variants={itemVariants}
              >
                <RenaissanceScroll animationDelay={index * 0.1}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-medium text-[#8D6748] mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-[#A47551] font-medium">{experience.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#6B4F3A] font-medium">{experience.period}</p>
                      <p className="text-[#BFA181]">{experience.location}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-[#A47551] mb-2">Project: {experience.project}</h4>
                      <div className="space-y-2">
                        {experience.description.map((desc, i) => (
                          <p key={i} className="text-[#6B4F3A]">{desc}</p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {experience.technology.split(', ').slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm bg-[rgba(253,246,237,0.7)] border border-[#E9E4DE] text-[#A47551] rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {experience.technology.split(', ').length > 5 && (
                        <span className="px-3 py-1.5 text-sm text-[#A47551]">
                          +{experience.technology.split(', ').length - 5} more
                        </span>
                      )}
                    </div>
                    
                    <div>
                      <div 
                        className="flex items-center justify-between cursor-pointer mb-3" 
                        onClick={() => toggleResponsibilities(experience.title)}
                      >
                        <h4 className="text-lg font-medium text-[#A47551]">Responsibilities:</h4>
                        <FaChevronDown 
                          className={`text-[#A47551] transition-transform duration-300 ${expandedItems[experience.title] ? 'transform rotate-180' : ''}`} 
                        />
                      </div>
                      
                      <div className={`responsibilities-container ${expandedItems[experience.title] ? 'responsibilities-expanded' : 'responsibilities-collapsed'}`}>
                        <ul className="renaissance-list">
                          {experience.responsibilities.map((responsibility, i) => (
                            <li key={i} className="text-[#6B4F3A]">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                        
                        {!expandedItems[experience.title] && experience.responsibilities.length > 2 && (
                          <div 
                            className="show-more-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleResponsibilities(experience.title);
                            }}
                          >
                            + {experience.responsibilities.length - 2} more responsibilities
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </RenaissanceScroll>
                {index < experiences.length - 1 && (
                  <div className="my-8">
                    <RenaissanceDecorator type="divider" animationDelay={0.2} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 