"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaCode } from 'react-icons/fa'

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
    project: "What's The Price", // link có thể thêm sau
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
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative z-10">
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
            Work Experience
          </motion.h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500">
                        <FaBriefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-cyan-200">{experience.title}</h3>
                        <p className="text-cyan-300">{experience.company}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center space-x-3">
                        <FaCalendarAlt className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-300">{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaMapMarkerAlt className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-300">{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaCode className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-300">{experience.role}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaUsers className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-300">Team size: {experience.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-cyan-200 mb-2">Project: {experience.project}</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.technology.split(', ').map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-200 rounded-full border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyan-200 mb-3">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {experience.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 