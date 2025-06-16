"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      period: "2020 - Present",
      title: "LEAD DEVELOPER",
      company: "Blockdots, London",
      description: "Led development team in creating scalable web applications using MERN stack.",
    },
    {
      period: "2018 - 2020",
      title: "FULL STACK WEB DEVELOPER",
      company: "Parsons, The New School",
      description: "Developed and maintained multiple client projects using modern web technologies.",
    },
    {
      period: "2016 - 2018",
      title: "UI DESIGNER",
      company: "House of Life, Leeds",
      description: "Designed user interfaces and experiences for web and mobile applications.",
    },
    {
      period: "2014 - 2016",
      title: "JUNIOR GRAPHICS DESIGNER",
      company: "Theme Junction",
      description: "Created graphics and visual elements for various digital platforms.",
    },
  ]

  return (
    <div ref={ref} className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-2xl md:text-3xl font-bold mb-8"
      >
        My Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-purple-500/30"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="text-purple-400 text-sm mb-1">{exp.period}</div>
            <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
            <div className="text-gray-400 text-sm mb-2">{exp.company}</div>
            <p className="text-gray-400 text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
