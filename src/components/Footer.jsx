"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa"

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "My Work", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Pooja2308kadav", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/pooja-kadav-193671258/", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/kadav_pooja/", label: "Instagram" },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 py-10 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(168,85,247,0.15)_0%,_transparent_60%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8"
        >
          <motion.h2 
            variants={childVariants}
            className="text-3xl md:text-4xl font-bold mb-3 text-white"
          >
            Let's Create Together!
          </motion.h2>
          <motion.a
            variants={childVariants}
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-2.5 rounded-full hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 text-base font-semibold"
          >
            Connect Now
          </motion.a>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="border-t border-gray-700/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <motion.div 
            variants={childVariants}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-white font-semibold text-xl">Pooja Kadav</span>
          </motion.div>

          <motion.div 
            variants={childVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-base"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          <motion.div 
            variants={childVariants}
            className="flex space-x-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5, backgroundColor: "#a855f7" }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          variants={childVariants}
          className="text-center mt-6 text-sm text-gray-400 flex items-center justify-center"
        >
          Crafted with <FaHeart className="text-red-500 mx-1.5 animate-pulse" /> by Pooja Kadav © {new Date().getFullYear()}
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer