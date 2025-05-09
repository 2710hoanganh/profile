"use client";

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Education Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500">
              Education
            </h2>
            <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:justify-between md:items-center border-2 border-cyan-300">
              <div>
                <h3 className="text-xl font-semibold mb-1 text-cyan-900 dark:text-cyan-200">GreenWich University</h3>
                <p className="text-cyan-700 dark:text-cyan-300 mb-1">Second Class Honours - Computer Science</p>
                <p className="text-cyan-400 dark:text-cyan-200 mb-1">Date: 05/2023</p>
                <p className="text-cyan-400 dark:text-cyan-200 mb-1">Relevant Coursework:</p>
                <ul className="list-disc list-inside text-cyan-900 dark:text-cyan-100 ml-4">
                  <li>The Structured Query Language (SQL)</li>
                  <li>C# for .NET Developers</li>
                </ul>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="text-cyan-700 dark:text-cyan-300">Viet Nam</p>
                <p className="text-cyan-700 dark:text-cyan-300">Graduation</p>
              </div>
            </div>
          </div>
          {/* End Education Section */}
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-100">
              <p className="text-lg text-gray-200">
                I'm a backend-focused software engineer with strong experience in building scalable, maintainable systems using .NET Core, Node.js, and modern JavaScript/TypeScript frameworks. Proficient in both relational and NoSQL databases (SQL Server, MySQL, MongoDB), REST API, Web API, and message-driven architectures (RabbitMQ, Socket.IO). Skilled in cloud-native development, containerization (Docker, Kubernetes), and DevOps practices. Passionate about clean code, design patterns, and continuous learning.
              </p>
              <p className="text-lg text-cyan-200">
                With several years of experience in the industry, I've worked on various projects ranging from small business websites to large-scale applications.
              </p>
              <p className="text-lg text-cyan-100">
                I'm constantly learning and exploring new technologies to stay at the forefront of web development.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-lg shadow-lg border-2 border-cyan-300">
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Frontend</h3>
                <p className="text-cyan-900 dark:text-cyan-200 font-semibold">ReactJS, EJS, JavaScript, TypeScript, HTML, CSS</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-lg shadow-lg border-2 border-cyan-300">
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Backend</h3>
                <p className="text-cyan-900 dark:text-cyan-200 font-semibold">Node.js, Express, .NET Core, ASP.NET, .NET Framework, Web API, REST API</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-lg shadow-lg border-2 border-cyan-300">
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Database & MQ</h3>
                <p className="text-cyan-900 dark:text-cyan-200 font-semibold">MongoDB, MySQL, SQL Server, Prisma, Entity Framework, AutoMapper, RabbitMQ, Socket.IO, Cloudinary, Argon2</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-lg shadow-lg border-2 border-cyan-300">
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">DevOps & Tools</h3>
                <p className="text-cyan-900 dark:text-cyan-200 font-semibold">Git, Docker, Kubernetes, Design Pattern</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 