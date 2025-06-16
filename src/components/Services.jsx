"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaPalette, FaMobile, FaCode, FaRocket } from "react-icons/fa"

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: <FaPalette />,
      title: "Branding Design",
      description:
        "I break down complex user experience problems to create integrity focused solutions that connect billions of people",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaMobile />,
      title: "UI/UX Design",
      description:
        "I break down complex user experience problems to create integrity focused solutions that connect billions of people",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <FaCode />,
      title: "Web Design",
      description:
        "I break down complex user experience problems to create integrity focused solutions that connect billions of people",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaRocket />,
      title: "App Design",
      description:
        "I break down complex user experience problems to create integrity focused solutions that connect billions of people",
      color: "from-orange-500 to-red-500",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Quality Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your
            customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
