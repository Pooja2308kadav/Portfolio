"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      description: "A full-featured e-commerce platform with payment integration and admin dashboard.",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React Native", "Express", "PostgreSQL"],
      description: "Secure mobile banking application with biometric authentication.",
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      description: "Modern portfolio website with smooth animations and responsive design.",
    },
    {
      title: "Task Management",
      category: "Full Stack",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["MERN Stack", "Socket.io"],
      description: "Real-time task management application with team collaboration features.",
    },
    {
      title: "Social Media Dashboard",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Chart.js", "Firebase"],
      description: "Analytics dashboard for social media management with real-time data.",
    },
    {
      title: "Food Delivery App",
      category: "Mobile App",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React Native", "Node.js", "MongoDB"],
      description: "Food delivery application with GPS tracking and payment integration.",
    },
  ]

  const categories = ["All", "Web Development", "Mobile App", "Web Design", "Full Stack"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 px-4">
      <div className="max-w-7xl mx-auto py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-purple-400">Work</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development and design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-gray-800/50 text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors">
                    <FaExternalLinkAlt className="text-white" />
                  </button>
                  <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors">
                    <FaGithub className="text-white" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-purple-400 text-sm">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
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
    </motion.div>
  )
}

export default Portfolio
