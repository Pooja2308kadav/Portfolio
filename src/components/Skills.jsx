"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaReact, FaNodeJs, FaDatabase, FaMobile, FaPalette, FaCode } from "react-icons/fa"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    { name: "React.js", level: 95, icon: <FaReact /> },
    { name: "Node.js", level: 90, icon: <FaNodeJs /> },
    { name: "MongoDB", level: 85, icon: <FaDatabase /> },
    { name: "React Native", level: 80, icon: <FaMobile /> },
    { name: "UI/UX Design", level: 88, icon: <FaPalette /> },
    { name: "JavaScript", level: 92, icon: <FaCode /> },
  ]

  return (
    <div ref={ref} className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-2xl md:text-3xl font-bold mb-8"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-purple-400 text-2xl mb-3 mx-auto">
              {skill.icon}
            </div>
            <h3 className="font-semibold mb-2">{skill.name}</h3>
            <div className="text-2xl font-bold text-purple-400">{skill.level}%</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
