"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "Project Manager, Terado Engineering Pvt. Ltd.",
      emoji: "👨‍💼",
      text: "Pooja's technical support and ability to resolve issues efficiently were instrumental in our project's success. Her clear communication and dedication stood out.",
    },
    {
      name: "Sneha Patil",
      position: "Lead Instructor, Codify Institute",
      emoji: "👩‍🏫",
      text: "Pooja's ability to design and teach web development concepts to peers was exceptional. Her mentorship in React and Node.js was highly effective.",
    },
    {
      name: "Vikram Desai",
      position: "Team Lead, Tul-Tech Programs",
      emoji: "👨‍💻",
      text: "Pooja's leadership in our tech awareness camps was inspiring. Her ability to simplify complex concepts for students was remarkable.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 100, rotateY: 15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        duration: 0.6 
      }
    },
    exit: { 
      opacity: 0, 
      x: -100, 
      rotateY: -15,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Testimonials</h2>

        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-gray-800/70 backdrop-blur-lg rounded-2xl p-10 text-center shadow-xl border border-purple-500/20 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
            <FaQuoteLeft className="text-purple-400 text-3xl mb-6 mx-auto opacity-50" />
            <p className="text-lg mb-8 leading-relaxed text-gray-200 max-w-3xl mx-auto italic">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex flex-col items-center justify-center space-y-4">
              <motion.span 
                className="text-5xl bg-gray-700/50 rounded-full w-16 h-16 flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {testimonials[currentIndex].emoji}
              </motion.span>
              <div>
                <h4 className="font-semibold text-xl text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].position}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center space-x-6 mt-12">
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: "#a855f7", boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300"
          >
            <FaChevronLeft size={18} />
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: "#a855f7", boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300"
          >
            <FaChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials