"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-lg shadow-2xl border-2 border-cyan-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-200">{experience.title}</h3>
                    <p className="text-cyan-700 dark:text-cyan-300">{experience.company}</p>
                    <p className="text-sm text-cyan-400 dark:text-cyan-200">{experience.location}</p>
                    <p className="text-sm text-cyan-400 dark:text-cyan-200 font-semibold mt-1">Project: <span className="font-normal">{experience.project}</span></p>
                    <p className="text-sm text-cyan-400 dark:text-cyan-200 font-semibold">Role: <span className="font-normal">{experience.role}</span></p>
                    <p className="text-sm text-cyan-400 dark:text-cyan-200 font-semibold">Team size: <span className="font-normal">{experience.teamSize}</span></p>
                    <p className="text-sm text-cyan-400 dark:text-cyan-200 font-semibold">Technology: <span className="font-normal">{experience.technology}</span></p>
                  </div>
                  <span className="text-sm text-cyan-300 dark:text-cyan-100">
                    {experience.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200 mb-2">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div>
                  <p className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">Responsibilities:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
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