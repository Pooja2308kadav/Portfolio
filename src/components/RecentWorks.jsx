"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const RecentWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React Native", "Express", "PostgreSQL"],
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "Task Management",
      category: "Full Stack",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["MERN Stack", "Socket.io"],
    },
  ]

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Recent Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your
            customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-purple-400 text-sm">{project.category}</span>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors">
                      <FaExternalLinkAlt size={12} />
                    </button>
                    <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors">
                      <FaGithub size={12} />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentWorks
