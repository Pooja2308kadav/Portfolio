"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-800/50 backdrop-blur-sm py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's work together!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I design and code beautifully simple things and I love what I do. Just simple like that!
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-200">
            Get in touch
          </button>
        </motion.div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-white font-semibold text-xl">Gerold</span>
            </div>

            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Services
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <FaHeart className="text-red-500 mx-2" /> by Gerold © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
