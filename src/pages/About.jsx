"use client"

import { motion } from "framer-motion"
import { FaDownload, FaUser, FaGraduationCap, FaAward } from "react-icons/fa"

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 px-4">
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="About Gerold"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-purple-500/30"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-purple-400">Me</span>
            </h1>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I'm a passionate MERN stack developer with over 5 years of experience in creating beautiful, functional,
              and user-centered digital experiences. I combine my technical skills with creative design to deliver
              exceptional web solutions.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              My expertise spans across modern web technologies including React, Node.js, MongoDB, and Express.js. I'm
              also skilled in UI/UX design, ensuring that every project I work on not only functions perfectly but also
              provides an outstanding user experience.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-200 flex items-center">
              <FaDownload className="mr-2" />
              Download CV
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center p-6 bg-gray-800/50 rounded-2xl"
          >
            <FaUser className="text-4xl text-purple-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Personal Info</h3>
            <p className="text-gray-400">Age: 28</p>
            <p className="text-gray-400">Location: London, UK</p>
            <p className="text-gray-400">Languages: English, Spanish</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center p-6 bg-gray-800/50 rounded-2xl"
          >
            <FaGraduationCap className="text-4xl text-purple-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-400">BSc Computer Science</p>
            <p className="text-gray-400">University of London</p>
            <p className="text-gray-400">2016 - 2020</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center p-6 bg-gray-800/50 rounded-2xl"
          >
            <FaAward className="text-4xl text-purple-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Achievements</h3>
            <p className="text-gray-400">14+ Awards Won</p>
            <p className="text-gray-400">50+ Projects Completed</p>
            <p className="text-gray-400">1.5K+ Happy Clients</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
