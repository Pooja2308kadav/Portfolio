"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, TechCorp",
      image: "/placeholder.svg?height=80&width=80",
      text: "Working with Gerold was an absolute pleasure. His expertise in MERN stack development helped us build a robust and scalable platform.",
    },
    {
      name: "Sarah Johnson",
      position: "Product Manager, StartupXYZ",
      image: "/placeholder.svg?height=80&width=80",
      text: "Gerold delivered exceptional results on our project. His attention to detail and technical skills are outstanding.",
    },
    {
      name: "Mike Davis",
      position: "CTO, InnovateLab",
      image: "/placeholder.svg?height=80&width=80",
      text: "I highly recommend Gerold for any web development project. His professionalism and expertise are unmatched.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Client's Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empowering people in new a digital journey with my super services
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="relative">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
            <FaQuoteLeft className="text-purple-400 text-3xl mb-6 mx-auto" />
            <p className="text-lg mb-8 leading-relaxed">{testimonials[currentIndex].text}</p>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
