"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaPalette,
  FaCode,
} from "react-icons/fa"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 }) // removed `once: true` for dynamic animation

  const skills = [
    { name: "React.js", level: 95, icon: <FaReact /> },
    { name: "Node.js", level: 90, icon: <FaNodeJs /> },
    { name: "MongoDB", level: 85, icon: <FaDatabase /> },
    { name: "React Vite", level: 80, icon: <FaMobile /> },
    // { name: "UI/UX Design", level: 88, icon: <FaPalette /> },
    { name: "JavaScript", level: 92, icon: <FaCode /> },
  ]

  return (
    <section ref={ref} className="py-12 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        My Skills
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            // transition={{ delay: index * 0.15, duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="text-purple-400 text-xl">{skill.icon}</div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: index * 0.15 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
              />
            </div>

            <div className="text-sm text-right text-purple-300 mt-1">
              {skill.level}%
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
