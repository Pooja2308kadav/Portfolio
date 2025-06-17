"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Img from "../assets/Img.png"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 text-lg mb-4"
          >
            I am Pooja
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Web Developer <br />
           
          
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg mb-8 max-w-lg"
          >
             I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and MongoDB. <br /> I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </motion.p>
         


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
           <a
  href="/PoojaResume.pdf"
  download="PoojaKadav_Resume.pdf"
  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-200 text-center"
>
  Download CV
</a>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://github.com/Pooja2308kadav#"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
                target="_blank"
                 rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/pooja-kadav-193671258/"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              
              <a
                href="https://www.instagram.com/kadav_pooja/?utm_source=ig_web_button_share_sheet"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>
            <img
              src= {Img}
              alt="pooja"
              className="relative z-10 w-full h-full "
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
