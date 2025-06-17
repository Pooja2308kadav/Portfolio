"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import AyurvedaWebImg from "../assets/SOA.jpg"
import MauliBusinessImg from "../assets/MB.jpg"
import RaychemImg from "../assets/RW.jpg"
import PortfolioImg from "../assets/PW.jpg"

const RecentWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "School Of Ayurveda",
      category: "Health Sector",
      image: AyurvedaWebImg,
      tech: ["React", "Node.js", "MongoDB"],
      liveLink: "https://schoolofayurveda.in/",
      githubLink: "https://github.com/your-username/school-of-ayurveda"
    },
    {
      title: "Mauli Business",
      category: "Mobile App",
      image: MauliBusinessImg,
      tech: ["React Native", "Express", "PostgreSQL"],
      liveLink: "https://maulibusiness.com/",
      githubLink: "https://github.com/LOOP-MATRIX/MauliBusinessClient"
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      image: PortfolioImg,
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      liveLink: "https://your-portfolio.example.com",
      githubLink: "https://github.com/your-username/portfolio"
    },
    {
      title: "Raychem RPG Website",
      category: "Full Stack",
      image: RaychemImg,
      tech: ["MERN Stack", "Socket.io"],
      liveLink: "https://www.raychemrpg.com/",
      githubLink: "https://github.com/Pooja2308kadav/Raychem"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2  gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden ">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-purple-400 text-sm">{project.category}</span>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
                    >
                      <FaGithub size={12} />
                    </a>
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
