"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNodeJs, FaDatabase, FaAws } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'ReactJS' },
  { name: 'React Hooks' },
  { name: 'Redux' },
  { name: 'EJS' },
  { name: 'Node.js' },
  { name: 'Express' },
  { name: '.NET Core' },
  { name: '.NET Framework' },
  { name: 'Web API' },
  { name: 'MongoDB' },
  { name: 'MySQL' },
  { name: 'SQL Server' },
  { name: 'Prisma' },
  { name: 'Entity Framework' },
  { name: 'AutoMapper' },
  { name: 'REST API' },
  { name: 'RabbitMQ' },
  { name: 'Socket.IO' },
  { name: 'Cloudinary' },
  { name: 'Design Pattern' },
  { name: 'Git' },
  { name: 'Docker' },
  { name: 'Kubernetes' },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500">
            Skills & Expertise
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg text-white list-disc list-inside">
            {skills.map((skill) => (
              <li key={skill.name} className="mb-2">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-200 to-sky-300 text-cyan-900 rounded-full font-semibold shadow">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
} 